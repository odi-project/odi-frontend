// 404 페이지

import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { Search, Home, ArrowLeft, MapPin } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            {/* 간단한 헤더 */}
            <header className="bg-white border-b border-gray-100 px-5 py-4">
                <Link href="/" className="flex items-center space-x-3">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-main-gradient rounded-toss flex items-center justify-center">
                            <span className="text-sm">🏪</span>
                        </div>
                        <span className="font-bold text-gray-900">오디</span>
                    </div>
                </Link>
            </header>

            {/* 404 콘텐츠 */}
            <main className="px-5 py-12 flex items-center justify-center min-h-[80vh]">
                <div className="w-full max-w-sm space-y-8 text-center">
                    {/* 404 일러스트레이션 */}
                    <div className="space-y-6">
                        <div className="relative">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
                                <Search className="w-16 h-16 text-gray-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 to-transparent"></div>
                            </div>

                            {/* 떠다니는 위치 아이콘들 */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center animate-bounce">
                                <MapPin className="w-4 h-4 text-primary-600" />
                            </div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center animate-bounce delay-300">
                                <span className="text-xs">🍽️</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold text-gray-900">
                                404
                            </h1>
                            <div className="space-y-2">
                                <h2 className="text-xl font-bold text-gray-800">
                                    페이지를 찾을 수 없어요
                                </h2>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    요청하신 페이지가 존재하지 않거나<br />
                                    일시적으로 사용할 수 없습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 제안 카드 */}
                    <Card className="p-5 bg-blue-50 border-blue-200 text-left">
                        <h3 className="font-semibold text-blue-900 mb-3 text-center">
                            이런 건 어떠세요?
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-button flex items-center justify-center">
                                    <span className="text-sm">🏠</span>
                                </div>
                                <div>
                                    <p className="font-medium text-blue-800 text-sm">홈에서 시작하기</p>
                                    <p className="text-xs text-blue-600">새로운 추천을 받아보세요</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-button flex items-center justify-center">
                                    <span className="text-sm">🔍</span>
                                </div>
                                <div>
                                    <p className="font-medium text-blue-800 text-sm">직접 검색하기</p>
                                    <p className="text-xs text-blue-600">원하는 지역을 선택해보세요</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* 액션 버튼들 */}
                    <div className="space-y-3">
                        <Link href="/">
                            <Button variant="primary" size="lg" fullWidth>
                                <Home className="w-5 h-5 mr-2" />
                                홈으로 가기
                            </Button>
                        </Link>

                        <Link href="/type">
                            <Button variant="outline" size="lg" fullWidth>
                                <Search className="w-5 h-5 mr-2" />
                                유형 선택하기
                            </Button>
                        </Link>
                    </div>

                    {/* 하단 도움말 */}
                    <div className="pt-4">
                        <p className="text-xs text-gray-500">
                            계속 문제가 발생하면 새로고침을 해보세요
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}