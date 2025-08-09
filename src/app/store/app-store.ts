import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AppState {
    // UI 상태
    isLoading: boolean
    lastGreetingUpdate: string | null

    // 사용자 설정
    preferredMaxTokens: number
    enableAutoRefresh: boolean

    // 액션들
    setLoading: (loading: boolean) => void
    setLastGreetingUpdate: (timestamp: string) => void
    setPreferredMaxTokens: (tokens: number) => void
    toggleAutoRefresh: () => void
    reset: () => void
}

export const useAppStore = create<AppState>()(
    devtools(
        persist(
            (set, get) => ({
                // 초기 상태
                isLoading: false,
                lastGreetingUpdate: null,
                preferredMaxTokens: 100,
                enableAutoRefresh: true,

                // 액션들
                setLoading: (loading) =>
                    set({ isLoading: loading }, false, 'setLoading'),

                setLastGreetingUpdate: (timestamp) =>
                    set({ lastGreetingUpdate: timestamp }, false, 'setLastGreetingUpdate'),

                setPreferredMaxTokens: (tokens) =>
                    set({ preferredMaxTokens: tokens }, false, 'setPreferredMaxTokens'),

                toggleAutoRefresh: () =>
                    set((state) => ({ enableAutoRefresh: !state.enableAutoRefresh }), false, 'toggleAutoRefresh'),

                reset: () =>
                    set({
                        isLoading: false,
                        lastGreetingUpdate: null,
                        preferredMaxTokens: 100,
                        enableAutoRefresh: true,
                    }, false, 'reset'),
            }),
            {
                name: 'odi-app-storage', // localStorage 키
                partialize: (state) => ({
                    preferredMaxTokens: state.preferredMaxTokens,
                    enableAutoRefresh: state.enableAutoRefresh,
                }), // 저장할 상태만 선택
            }
        ),
        {
            name: 'ODI App Store', // Redux DevTools 이름
        }
    )
)