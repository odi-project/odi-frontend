'use client'

import React from 'react'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { AlertCircle, RefreshCw } from 'lucide-react'

interface ErrorBoundaryState {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    ErrorBoundaryState
> {
    constructor(props: { children: React.ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error,
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-white flex items-center justify-center p-5">
                    <Card className="p-8 max-w-sm w-full text-center space-y-6">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                            <AlertCircle className="w-8 h-8 text-red-500" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-gray-900">
                                앱에 문제가 생겼어요
                            </h2>
                            <p className="text-sm text-gray-600">
                                일시적인 오류입니다.<br />
                                새로고침을 해보세요.
                            </p>
                        </div>

                        <Button
                            onClick={() => window.location.reload()}
                            variant="primary"
                            size="lg"
                            fullWidth
                        >
                            <RefreshCw className="w-5 h-5 mr-2" />
                            새로고침
                        </Button>
                    </Card>
                </div>
            )
        }

        return this.props.children
    }
}