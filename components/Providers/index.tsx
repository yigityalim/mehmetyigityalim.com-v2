'use client'
import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types'

export default function Provider({
    children,
    ...props
}: Readonly<React.PropsWithChildren<NextThemeProviderProps>>): React.ReactElement {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}
