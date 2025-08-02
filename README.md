### 폴더 구조
```
src/
├── app/                          # App Router
│   ├── (main)/                   # 🏠 메인 서비스 그룹
│   │   ├── page.tsx              # / - 메인 페이지 (오디 추천)
│   │   ├── guide/                # /guide - 서비스 안내
│   │   │   └── page.tsx
│   │   └── layout.tsx            # 메인 서비스 레이아웃
│   │
│   ├── (selection)/              # 🎯 선택/추천 그룹  
│   │   ├── type/                 # /type - 유형 선택
│   │   │   └── page.tsx
│   │   ├── restaurants/          # /restaurants - 식당 추천
│   │   │   ├── page.tsx
│   │   │   └── [id]/             # /restaurants/[id] - 식당 상세
│   │   │       └── page.tsx
│   │   ├── places/               # /places - 장소 추천  
│   │   │   ├── page.tsx
│   │   │   └── [id]/             # /places/[id] - 장소 상세
│   │   │       └── page.tsx
│   │   └── layout.tsx            # 선택/추천 페이지 레이아웃
│   │
│   ├── api/                      # API Routes
│   │   ├── restaurants/
│   │   │   ├── route.ts          # GET /api/restaurants
│   │   │   └── [id]/
│   │   │       └── route.ts      # GET /api/restaurants/[id]
│   │   ├── places/
│   │   │   └── route.ts          # GET /api/places
│   │   ├── weather/
│   │   │   └── route.ts          # GET /api/weather
│   │   └── recommendations/
│   │       └── route.ts          # GET /api/recommendations
│   │
│   ├── globals.css
│   ├── layout.tsx                # 루트 레이아웃
│   ├── loading.tsx               # 글로벌 로딩
│   ├── error.tsx                 # 글로벌 에러
│   └── not-found.tsx            # 404 페이지
│
├── components/                   # 재사용 컴포넌트
│   ├── ui/                      # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   │
│   ├── features/                # 기능별 컴포넌트
│   │   ├── weather/             # 날씨 관련
│   │   │   ├── weather-card.tsx
│   │   │   └── weather-info.tsx
│   │   ├── restaurants/         # 식당 관련
│   │   │   ├── restaurant-card.tsx
│   │   │   ├── restaurant-list.tsx
│   │   │   ├── restaurant-detail.tsx
│   │   │   └── restaurant-map.tsx
│   │   ├── places/              # 장소 관련
│   │   │   ├── place-card.tsx
│   │   │   ├── place-list.tsx
│   │   │   └── place-map.tsx
│   │   └── recommendations/     # 추천 관련
│   │       ├── recommendation-card.tsx
│   │       └── recommendation-steps.tsx
│   │
│   ├── layout/                  # 레이아웃 컴포넌트
│   │   ├── header.tsx
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   │
│   └── common/                  # 공통 컴포넌트
│       ├── loading-spinner.tsx
│       ├── error-boundary.tsx
│       └── empty-state.tsx
│
├── lib/                         # 유틸리티 & 설정
│   ├── utils.ts                 # 일반 유틸리티
│   ├── api.ts                   # API 클라이언트
│   ├── geolocation.ts           # 위치 관련 유틸
│   ├── weather.ts               # 날씨 API 연동
│   └── constants.ts             # 상수 정의
│
├── hooks/                       # Custom Hooks
│   ├── use-geolocation.ts       # 위치 정보 훅
│   ├── use-weather.ts           # 날씨 정보 훅
│   ├── use-restaurants.ts       # 식당 데이터 훅
│   └── use-recommendations.ts   # 추천 알고리즘 훅
│
├── store/                       # 상태 관리 (Zustand)
│   ├── user-store.ts           # 사용자 위치, 선호도
│   ├── app-store.ts            # 앱 전역 상태
│   └── recommendations-store.ts # 추천 관련 상태
│
├── types/                       # TypeScript 타입
│   ├── restaurant.ts           # 식당 관련 타입
│   ├── place.ts                # 장소 관련 타입
│   ├── weather.ts              # 날씨 관련 타입
│   ├── user.ts                 # 사용자 관련 타입
│   └── api.ts                  # API 응답 타입
│
├── data/                        # 정적 데이터
│   ├── mock-restaurants.ts      # 개발용 목업 데이터
│   ├── mock-places.ts
│   └── categories.ts           # 음식/장소 카테고리
│
└── styles/                      # 스타일
    ├── globals.css
    └── components.css
```