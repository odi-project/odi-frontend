// Query Keys (타입 안전성을 위한 상수)
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {greetingService} from "@/app/service/greeting-service";
import {GreetingRequest} from "@/app/types/api";

export const greetingKeys = {
    all: ['greeting'] as const,
    timeBasedGreeting: () => [...greetingKeys.all, 'time-based'] as const,
    customGreeting: (message: string) => [...greetingKeys.all, 'custom', message] as const,
}

// 시간대별 인사말 조회 훅
export const useTimeBasedGreeting = (options?: {
    enabled?: boolean
    maxTokens?: number
}) => {
    return useQuery({
        queryKey: greetingKeys.timeBasedGreeting(),
        queryFn: () => greetingService.getTimeBasedGreeting(options?.maxTokens),
        enabled: options?.enabled !== false,
        staleTime: 5 * 60 * 1000, // 5분간 fresh
        gcTime: 10 * 60 * 1000, // 10분간 cache 유지 (구 cacheTime)
        retry: 2,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    })
}

// 커스텀 인사말 생성 뮤테이션
export const useCreateGreeting = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (request: GreetingRequest) => greetingService.getGreeting(request),
        onSuccess: (data) => {
            // 성공 시 캐시 업데이트
            queryClient.setQueryData(greetingKeys.timeBasedGreeting(), data)

            // 토스트 알림 (optional)
            console.log('✅ 새로운 인사말이 생성되었습니다!')
        },
        onError: (error) => {
            console.error('❌ 인사말 생성 실패:', error)
            // 에러 토스트 표시 (optional)
        },
    })
}