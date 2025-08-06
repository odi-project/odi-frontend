'use client'

import Link from 'next/link'
import { ArrowLeft, Utensils, Building2, ArrowRight } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { useState, useEffect } from 'react'

export default function TypeSelectionPage() {
    const [mounted, setMounted] = useState(false)
    const [selectedType, setSelectedType] = useState<string | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-white w-full">
            {/* 헤더 */}
            <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 px-5 py-4 sticky top-0 z-50 w-full">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="p-2 hover:bg-gray-100 rounded-button transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-main-gradient rounded-toss flex items-center justify-center shadow-toss">
                            <span className="text-xl">🎯</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">유형 선택</h1>
                            <p className="text-xs text-gray-500">원하는 유형을 선택하세요</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="px-5 py-8 space-y-8 w-full">
                {/* 질문 카드 */}
                <Card variant="primary" className="p-6 text-center relative overflow-hidden w-full">
                    <div className="absolute -top-8 -right-8 w-20 h-20 bg-white/10 rounded-full"></div>
                    <div className="relative z-10 space-y-3">
                        <h2 className="text-xl font-bold text-white mb-2">
                            어떤 곳을 찾고 계신가요?
                        </h2>
                        <p className="text-white/90 text-sm">
                            위치와 시간을 고려해 최적의 장소를 추천해드려요
                        </p>
                    </div>
                </Card>

                {/* 현재 상황 정보 */}
                <Card className="p-4 bg-blue-50 border-blue-200 w-full">
                    <div className="text-center space-y-2">
                        <div className="flex items-center justify-center space-x-2 text-blue-700">
                            <span className="text-sm">📍 서울시 강남구</span>
                            <span className="text-sm">•</span>
                            <span className="text-sm">☀️ 18°C</span>
                            <span className="text-sm">•</span>
                            <span className="text-sm">🕘 오전 9:30</span>
                        </div>
                        <p className="text-xs text-blue-600">
                            현재 상황에 맞는 추천을 준비했어요!
                        </p>
                    </div>
                </Card>

                {/* 선택 카드들 - 가로 배치로 변경 */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-800 text-center">
                        원하는 유형을 선택해주세요
                    </h3>

                    <div className="grid grid-cols-2 gap-4 w-full">
                        {/* 식당 카드 - 컴팩트하게 */}
                        <div
                            onClick={() => setSelectedType('restaurant')}
                            className="cursor-pointer"
                        >
                            <Card
                                variant="secondary"
                                className={`p-5 text-center transition-all duration-300 w-full ${
                                    selectedType === 'restaurant'
                                        ? 'ring-4 ring-secondary-200 shadow-2xl scale-105'
                                        : 'hover:shadow-xl hover:scale-105'
                                }`}
                                hoverable
                            >
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                                        <Utensils className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1">식당</h3>
                                        <p className="text-white/80 text-xs mb-2">(음식점)</p>
                                        <div className="space-y-0.5">
                                            <p className="text-white/70 text-xs">• 맛집 추천</p>
                                            <p className="text-white/70 text-xs">• 거리별 정렬</p>
                                            <p className="text-white/70 text-xs">• 리뷰 & 평점</p>
                                        </div>
                                    </div>
                                    {selectedType === 'restaurant' && (
                                        <div className="pt-2">
                                            <div className="w-full h-0.5 bg-white/30 rounded"></div>
                                            <p className="text-white text-xs font-medium mt-2">선택됨 ✓</p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>

                        {/* 장소 카드 - 컴팩트하게 */}
                        <div
                            onClick={() => setSelectedType('place')}
                            className="cursor-pointer"
                        >
                            <Card
                                variant="primary"
                                className={`p-5 text-center transition-all duration-300 w-full ${
                                    selectedType === 'place'
                                        ? 'ring-4 ring-primary-200 shadow-2xl scale-105'
                                        : 'hover:shadow-xl hover:scale-105'
                                }`}
                                hoverable
                            >
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1">장소</h3>
                                        <p className="text-white/80 text-xs mb-2">(관광지, 공원 등)</p>
                                        <div className="space-y-0.5">
                                            <p className="text-white/70 text-xs">• 명소 추천</p>
                                            <p className="text-white/70 text-xs">• 날씨 고려</p>
                                            <p className="text-white/70 text-xs">• 접근성 정보</p>
                                        </div>
                                    </div>
                                    {selectedType === 'place' && (
                                        <div className="pt-2">
                                            <div className="w-full h-0.5 bg-white/30 rounded"></div>
                                            <p className="text-white text-xs font-medium mt-2">선택됨 ✓</p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* 추천 이유 - 더 컴팩트하게 */}
                <Card className="p-4 bg-purple-50 border-purple-200 w-full">
                    <div className="text-center space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-sm">🤖</span>
                            </div>
                            <h4 className="font-bold text-purple-800">AI 추천 시스템</h4>
                        </div>
                        <p className="text-sm text-purple-700 leading-relaxed">
                            시간대와 날씨, 위치를 종합적으로 분석해<br />
                            가장 적합한 장소들을 엄선해드려요
                        </p>
                    </div>
                </Card>

                {/* 액션 버튼들 */}
                <div className="space-y-4 w-full">
                    {selectedType && (
                        <div className="animate-slide-up">
                            <Link
                                href={selectedType === 'restaurant' ? '/restaurants' : '/places'}
                                className="block w-full"
                            >
                                <Button variant="primary" size="xl" fullWidth className="shadow-toss-hover">
                  <span className="text-lg mr-3">
                    {selectedType === 'restaurant' ? '🍽️' : '🏛️'}
                  </span>
                                    {selectedType === 'restaurant' ? '식당 추천받기' : '장소 추천받기'}
                                    <ArrowRight className="w-6 h-6 ml-3" />
                                </Button>
                            </Link>
                        </div>
                    )}

                    {/* 선택되지 않았을 때 안내 */}
                    {!selectedType && (
                        <div className="text-center py-4">
                            <p className="text-sm text-gray-500 mb-2">
                                ☝️ 위에서 원하는 유형을 선택해주세요
                            </p>
                            <div className="flex justify-center space-x-1">
                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                            </div>
                        </div>
                    )}

                    <div className="text-center space-y-3">
                        <p className="text-sm text-gray-500">
                            선택하신 유형에 따라<br />
                            맞춤형 추천을 제공해드려요
                        </p>

                        <Link href="/">
                            <Button variant="outline" size="lg">
                                다시 선택하기
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}