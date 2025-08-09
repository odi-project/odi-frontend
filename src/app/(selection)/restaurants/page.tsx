'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, Star, Clock, Navigation, RefreshCw, Heart } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { useState, useEffect } from 'react'

const mockRestaurants = [
    {
        id: 1,
        name: '맛있는 곳수림',
        category: '한식',
        distance: '420m',
        rating: 4.5,
        priceRange: '8,000원~12,000원',
        review: '따뜻한 국물이 일품인 곳이에요',
        address: '서울시 강남구 대현로 123',
        isLiked: false
    },
    {
        id: 2,
        name: '홍콩반점',
        category: '중식',
        distance: '680m',
        rating: 4.2,
        priceRange: '10,000원~15,000원',
        review: '짜장면이 정말 맛있어요',
        address: '서울시 강남구 테헤란로 456',
        isLiked: true
    }
]

export default function RestaurantsPage() {
    const [mounted, setMounted] = useState(false)
    const [restaurants, setRestaurants] = useState(mockRestaurants)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleLike = (id: number) => {
        setRestaurants(prev =>
            prev.map(restaurant =>
                restaurant.id === id
                    ? { ...restaurant, isLiked: !restaurant.isLiked }
                    : restaurant
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
                        <div className="w-10 h-10 bg-orange-gradient rounded-toss flex items-center justify-center shadow-toss">
                            <span className="text-xl">🍽️</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">식당 추천</h1>
                            <p className="text-xs text-gray-500">오늘의 맛집을 찾아보세요</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="px-5 py-6 space-y-6 pb-10 w-full">
                {/* 추천 헤더 */}
                <Card variant="secondary" className="p-6 text-center relative overflow-hidden w-full">
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="relative z-10 space-y-2">
                        <h2 className="text-xl font-bold text-white">
                            오늘의 추천 식당
                        </h2>
                        <p className="text-white/90 text-sm">
                            현재 위치 기준으로 엄선한 맛집들이에요
                        </p>
                    </div>
                </Card>

                {/* 현재 상황 */}
                <Card className="p-4 bg-blue-50 border-blue-200 w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-blue-800 text-sm">서울시 강남구</p>
                                <p className="text-xs text-blue-600">반경 1km 내 맛집 추천</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-blue-800">☀️ 18°C</p>
                            <p className="text-xs text-blue-600">오전 9:30</p>
                        </div>
                    </div>
                </Card>

                {/* 식당 리스트 */}
                <div className="space-y-4 w-full">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800 text-lg">추천 식당</h3>
                        <Button variant="outline" size="sm">
                            <RefreshCw className="w-4 h-4 mr-1" />
                            새로고침
                        </Button>
                    </div>

                    {restaurants.map((restaurant) => (
                        <Card key={restaurant.id} className="p-5 w-full" hoverable>
                            <div className="space-y-4">
                                {/* 식당 기본 정보 */}
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <h4 className="font-bold text-gray-900 text-lg">{restaurant.name}</h4>
                                            <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-button">
                        {restaurant.category}
                      </span>
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                                <span className="font-medium">{restaurant.rating}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Navigation className="w-4 h-4" />
                                                <span>{restaurant.distance}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleLike(restaurant.id)}
                                        className="p-2 hover:bg-gray-100 rounded-button transition-colors"
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${
                                                restaurant.isLiked
                                                    ? 'text-red-500 fill-current'
                                                    : 'text-gray-400'
                                            }`}
                                        />
                                    </button>
                                </div>

                                {/* 주소와 가격 */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm text-gray-600">{restaurant.address}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-500">💰</span>
                                        <span className="text-sm font-medium text-gray-700">{restaurant.priceRange}</span>
                                    </div>
                                </div>

                                {/* 리뷰 */}
                                <div className="p-3 bg-gray-50 rounded-button">
                                    <p className="text-sm text-gray-700 italic">
                                        "{restaurant.review}"
                                    </p>
                                </div>

                                {/* 지도 미니뷰 (가상) */}
                                <div className="h-20 bg-gradient-to-r from-blue-100 to-green-100 rounded-button border border-blue-200 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                                            <p className="text-xs text-blue-700 font-medium">지도에서 위치 확인</p>
                                        </div>
                                    </div>
                                    {/* 가상 경로선 */}
                                    <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-blue-400 opacity-50"></div>
                                    <div className="absolute bottom-2 right-8 w-2 h-2 bg-red-500 rounded-full"></div>
                                </div>

                                {/* 액션 버튼들 */}
                                <div className="flex space-x-3">
                                    <Button variant="secondary" className="flex-1">
                                        <Navigation className="w-4 h-4 mr-2" />
                                        길찾기
                                    </Button>
                                    <Link href={`/restaurants/${restaurant.id}`} className="flex-1">
                                        <Button variant="primary" fullWidth>
                                            <span className="mr-2">📞</span>
                                            상세
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* 더보기 & 다시 추천 */}
                <div className="space-y-3 w-full">
                    <Button variant="outline" size="lg" fullWidth>
                        <RefreshCw className="w-5 h-5 mr-2" />
                        다른 식당 추천받기
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