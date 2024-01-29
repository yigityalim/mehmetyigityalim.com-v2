import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 0,
    }).format(price)
}

export function textColorForBackground(color: string): string {
    const { r, g, b } = hexToRgb(color)
    return (r * 299 + g * 587 + b * 114) / 1000 >= 128 ? 'black' : 'white'
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result: RegExpExecArray | null = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.toLowerCase())
    if (!result) {
        return { r: 0, g: 0, b: 0 }
    }
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    }
}
