import React from 'react'
import { cn } from '@/app/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    variant?: 'default' | 'gradient' | 'primary' | 'secondary'
    hoverable?: boolean
}

export function Card({
                         className,
                         children,
                         variant = 'default',
                         hoverable = false,
                         ...props
                     }: CardProps) {
    const variants = {
        default: 'bg-white border border-gray-100 shadow-card',
        gradient: 'bg-main-gradient text-white shadow-toss',
        primary: 'bg-green-gradient text-white shadow-toss',
        secondary: 'bg-orange-gradient text-white shadow-lg'
    }

    const hoverEffect = hoverable ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : ''

    return (
        <div
            className={cn(
                'rounded-card transition-all duration-300',
                variants[variant],
                hoverEffect,
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}