'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState, ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    // QueryClient를 useState로 생성하여 재생성 방지
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1분
                        gcTime: 5 * 60 * 1000, // 5분 (구 cacheTime)
                        retry: (failureCount, error: any) => {
                            // 4xx 에러는 재시도하지 않음
                            if (error?.code >= 400 && error?.code < 500) {
                                return false
                            }
                            // 3번까지 재시도
                            return failureCount < 3
                        },
                        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
                        refetchOnWindowFocus: false, // 창 포커스시 자동 refetch 비활성화
                        refetchOnReconnect: true, // 네트워크 재연결시 refetch
                    },
                    mutations: {
                        retry: 1,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* 개발 환경에서만 DevTools 표시 */}
            {process.env.NODE_ENV === 'development' && (
                <ReactQueryDevtools
                    initialIsOpen={false}
                    buttonPosition="bottom-left"
                />
            )}
        </QueryClientProvider>
    )
}