'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, Star, Clock, Navigation, RefreshCw, Heart, Trees } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { useState, useEffect } from 'react'

const mockPlaces = [
    {
        id: 1,
        name: '한강공원 반포지구',
        category: '공원',
        distance: '2.1km',
        rating: 4.7,
        review: '산책하기 딱 좋은 날씨에요',
        address: '서울시 서초구 반포동',
        isLiked: false,
        features: ['산책로', '자전거 대여', '카페']
    },
    {
        id: 2,
        name: '코엑스 아쿠아리움',
        category: '체험시설',
        distance: '1.8km',
        rating: 4.3,
        review: '실내라 날씨 걱정 없어요',
        address: '서울시 강남구 영동대로 513',
        isLiked: true,
        features: ['실내', '주차가능', '가족동반']
    }
]

export default function PlacesPage() {
    const [mounted, setMounted] = useState(false)
    const [places, setPlaces] = useState(mockPlaces)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleLike = (id: number) => {
        setPlaces(prev =>
            prev.map(place =>
                place.id === id
                    ? { ...place, isLiked: !place.isLiked }
                    : place
            )
        )
    }

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-white w-full">
            {/* 헤더 */}
            <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 px-5 py-4 sticky top-0 z-50 w-full">
                <div className="flex items-center space-x-4">
                    <Link href="/type" className="p-2 hover:bg-gray-100 rounded-button transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-gradient rounded-toss flex items-center justify-center shadow-toss">
                            <span className="text-xl">🏛️</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">장소 추천</h1>
                            <p className="text-xs text-gray-500">오늘 갈만한 곳을 찾아보세요</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="px-5 py-6 space-y-6 pb-10 w-full">
                {/* 추천 헤더 */}
                <Card variant="primary" className="p-6 text-center relative overflow-hidden w-full">
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/5 rounded-full"></div>
                    <div className="relative z-10 space-y-2">
                        <h2 className="text-xl font-bold text-white">
                            오늘의 추천 장소
                        </h2>
                        <p className="text-white/90 text-sm">
                            현재 날씨와 시간을 고려한 완벽한 장소들이에요
                        </p>
                    </div>
                </Card>

                {/* 날씨 고려 알림 */}
                <Card className="p-4 bg-green-50 border-green-200 w-full">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-toss flex items-center justify-center">
                            <Trees className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-green-800 text-sm">날씨가 좋네요! ☀️</p>
                            <p className="text-xs text-green-600">야외 활동하기 딱 좋은 날이에요</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-green-800">18°C</p>
                            <p className="text-xs text-green-600">맑음</p>
                        </div>
                    </div>
                </Card>

                {/* 장소 리스트 */}
                <div className="space-y-4 w-full">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800 text-lg">추천 장소</h3>
                        <Button variant="outline" size="sm">
                            <RefreshCw className="w-4 h-4 mr-1" />
                            새로고침
                        </Button>
                    </div>

                    {places.map((place) => (
                        <Card key={place.id} className="p-5 w-full" hoverable>
                            <div className="space-y-4">
                                {/* 장소 기본 정보 */}
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <h4 className="font-bold text-gray-900 text-lg">{place.name}</h4>
                                            <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-button">
                        {place.category}
                      </span>
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                <span className="font-medium">{place.rating}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Navigation className="w-4 h-4" />
                                                <span>{place.distance}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleLike(place.id)}
                                        className="p-2 hover:bg-gray-100 rounded-button transition-colors"
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${
                                                place.isLiked
                                                    ? 'text-red-500 fill-current'
                                                    : 'text-gray-400'
                                            }`}
                                        />
                                    </button>
                                </div>

                                {/* 주소 */}
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">{place.address}</span>
                                </div>

                                {/* 특징 태그들 */}
                                <div className="flex flex-wrap gap-2">
                                    {place.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-button"
                                        >
                      {feature}
                    </span>
                                    ))}
                                </div>

                                {/* 리뷰 */}
                                <div className="p-3 bg-gray-50 rounded-button">
                                    <p className="text-sm text-gray-700 italic">
                                        "{place.review}"
                                    </p>
                                </div>

                                {/* 지도 미니뷰 */}
                                <div className="h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-button border border-green-200 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <MapPin className="w-6 h-6 text-green-600 mx-auto mb-1" />
                                            <p className="text-xs text-green-700 font-medium">지도에서 위치 확인</p>
                                        </div>
                                    </div>
                                    {/* 가상 경로선 */}
                                    <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-green-400 opacity-50"></div>
                                    <div className="absolute bottom-2 right-8 w-2 h-2 bg-red-500 rounded-full"></div>
                                </div>

                                {/* 액션 버튼들 */}
                                <div className="flex space-x-3">
                                    <Button variant="outline" className="flex-1">
                                        <Navigation className="w-4 h-4 mr-2" />
                                        길찾기
                                    </Button>
                                    <Button variant="primary" className="flex-1">
                                        <span className="mr-2">ℹ️</span>
                                        상세정보
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* 더보기 & 다시 추천 */}
                <div className="space-y-3 w-full">
                    <Button variant="outline" size="lg" fullWidth>
                        <RefreshCw className="w-5 h-5 mr-2" />
                        다른 장소 추천받기
                    </Button>

                    <div className="text-center">
                        <Link href="/type">
                            <Button variant="ghost" size="sm">
                                다시 선택하기
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}