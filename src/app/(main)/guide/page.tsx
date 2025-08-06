'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Sparkles, MapPin, Clock, Target, MessageCircle, Mail } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { useState, useEffect } from 'react'

export default function GuidePage() {
    const [mounted, setMounted] = useState(false)

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
                            <span className="text-xl">🍽️</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">서비스 안내</h1>
                            <p className="text-xs text-gray-500">사용법을 알아보세요</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="px-5 py-6 space-y-6 pb-10 w-full">
                {/* 서비스 소개 */}
                <Card variant="gradient" className="p-8 text-center relative overflow-hidden w-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

                    <div className="relative z-10 space-y-4">
                        <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm">
                            <Target className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">맞춤형 추천 서비스</h2>
                            <p className="text-white/90 text-sm leading-relaxed">
                                AI가 당신의 위치와 날씨, 시간을 분석해<br />
                                완벽한 맛집과 장소를 추천해드려요! ✨
                            </p>
                        </div>
                    </div>
                </Card>

                {/* 단계별 가이드 */}
                <div className="space-y-4 w-full">
                    <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-primary-500" />
                        <h3 className="text-lg font-bold text-gray-800">이용 방법</h3>
                    </div>

                    {/* 1단계 */}
                    <Card className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 w-full">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-500 text-white rounded-toss flex items-center justify-center flex-shrink-0 shadow-lg">
                                <span className="text-lg font-bold">1</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-green-800 mb-2 text-lg">위치 확인</h4>
                                <p className="text-sm text-green-700 leading-relaxed">
                                    현재 위치와 날씨를 자동으로 감지해
                                    최적의 추천을 준비해요
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* 2단계 */}
                    <Card className="p-5 bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200 w-full">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-yellow-500 text-white rounded-toss flex items-center justify-center flex-shrink-0 shadow-lg">
                                <span className="text-lg font-bold">2</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-yellow-800 mb-2 text-lg">유형 선택</h4>
                                <p className="text-sm text-yellow-700 leading-relaxed">
                                    🍽️ <strong>식당</strong> 또는 🏛️ <strong>장소</strong> 중 선택하세요.<br />
                                    시간대에 맞는 추천을 고려해드려요
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* 3단계 */}
                    <Card className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 w-full">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-500 text-white rounded-toss flex items-center justify-center flex-shrink-0 shadow-lg">
                                <span className="text-lg font-bold">3</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-blue-800 mb-2 text-lg">추천 확인</h4>
                                <p className="text-sm text-blue-700 leading-relaxed">
                                    🗺️ 지도로 위치와 거리를 확인하고<br />
                                    🔍 마음에 안 들면 다시 추천받으세요
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* 특징 */}
                <Card className="p-5 w-full">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg">주요 특징</h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: '📍', title: '위치 기반 맞춤 추천', desc: 'GPS를 활용한 정확한 위치 기반 추천' },
                            { icon: '☀️', title: '실시간 날씨 고려', desc: '날씨에 따른 최적의 장소 선택' },
                            { icon: '🗺️', title: '지도로 거리 확인', desc: '직관적인 지도 인터페이스 제공' },
                            { icon: '⭐', title: '리뷰와 평점 제공', desc: '실제 이용자들의 생생한 후기' }
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-button">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-sm">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800 text-sm">{feature.title}</p>
                                    <p className="text-xs text-gray-600 mt-0.5">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* 시작하기 버튼 */}
                <div className="space-y-4 w-full">
                    <Link href="/type" className="block w-full">
                        <Button variant="primary" size="xl" fullWidth className="shadow-toss-hover">
                            <Sparkles className="w-6 h-6 mr-3" />
                            바로 시작하기
                        </Button>
                    </Link>

                    <div className="text-center">
                        <Link href="/">
                            <Button variant="outline" size="lg">
                                메인으로 돌아가기
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 문의 정보 */}
                <Card className="p-5 bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200 w-full">
                    <div className="text-center space-y-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-toss flex items-center justify-center mx-auto">
                            <MessageCircle className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-gray-800">문의하기</h4>
                            <p className="text-sm text-gray-600">
                                궁금한 점이 있으시면 언제든지 연락주세요
                            </p>
                            <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                                <Mail className="w-3 h-3" />
                                <span>help@odi-app.com</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </main>
        </div>
    )
}