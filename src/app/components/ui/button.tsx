'use client'

import React from 'react'
import { cn } from '@/app/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    children: React.ReactNode
    fullWidth?: boolean
}
export function Button({
                           className,
                           variant = 'primary',
                           size = 'md',
                           children,
                           fullWidth = false,
                           ...props
                       }: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95'

    const variants = {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-toss-hover shadow-toss rounded-button',
        secondary: 'bg-secondary-400 text-white hover:bg-secondary-500 hover:shadow-lg shadow-md rounded-button',
        outline: 'border-2 border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 rounded-button',
        ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-button'
    }

    const sizes = {
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl'
    }

    return (
        <button
            className={cn(
                baseClasses,
                variants[variant],
                sizes[size],
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}