// 전역 에러 페이지

'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { AlertTriangle, RefreshCw, Home, MessageCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-5">
            <div className="w-full max-w-sm space-y-6">
                {/* 에러 일러스트레이션 */}
                <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                        <AlertTriangle className="w-12 h-12 text-red-500" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-gray-900">
                            앗, 문제가 발생했어요
                        </h1>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            일시적인 오류가 발생했습니다.<br />
                            잠시 후 다시 시도해주세요.
                        </p>
                    </div>
                </div>

                {/* 에러 정보 카드 */}
                <Card className="p-4 bg-red-50 border-red-200">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-red-800 text-sm">오류 정보</h3>
                        <p className="text-xs text-red-600 font-mono bg-white rounded-button p-2 break-all">
                            {error.message || '알 수 없는 오류가 발생했습니다.'}
                        </p>
                        {error.digest && (
                            <p className="text-xs text-red-500">
                                오류 ID: {error.digest}
                            </p>
                        )}
                    </div>
                </Card>

                {/* 액션 버튼들 */}
                <div className="space-y-3">
                    <Button
                        onClick={reset}
                        variant="primary"
                        size="lg"
                        fullWidth
                        className="shadow-lg"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        다시 시도하기
                    </Button>

                    <Link href="/">
                        <Button variant="outline" size="lg" fullWidth>
                            <Home className="w-5 h-5 mr-2" />
                            홈으로 돌아가기
                        </Button>
                    </Link>
                </div>

                {/* 도움말 */}
                <Card className="p-4 bg-gray-50 border-gray-200">
                    <div className="text-center space-y-2">
                        <MessageCircle className="w-5 h-5 text-gray-400 mx-auto" />
                        <p className="text-xs text-gray-600">
                            문제가 지속되면 고객센터로 문의해주세요
                        </p>
                        <p className="text-xs text-gray-500">
                            📧 help@odi-app.com
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}