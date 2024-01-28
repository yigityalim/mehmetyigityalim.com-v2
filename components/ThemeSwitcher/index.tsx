'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useIsMounted } from '@/hooks/use-is-mounted'
import { Sun, Moon, Laptop } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
type ThemeSwitcherProps = {
    type?: 'button' | 'dropdown'
}

export default function ThemeSwitcher({ type = 'button' }: Readonly<ThemeSwitcherProps>): React.ReactElement {
    const isMounted = useIsMounted()

    const { theme, setTheme } = useTheme()

    if (type === 'dropdown' && isMounted)
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' size='icon'>
                        <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                        <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                        <span className='sr-only'>Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )

    if (type === 'dropdown' && !isMounted)
        return (
            <Button variant='outline' size='icon'>
                <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                <span className='sr-only'>Toggle theme</span>
            </Button>
        )

    if (type === 'button' && !isMounted)
        return (
            <div className='flex w-full flex-row items-center justify-between gap-x-2'>
                <Button className='w-full'>
                    <Sun className='size-3' />
                </Button>
                <Button className='w-full'>
                    <Moon className='size-3' />
                </Button>
                <Button className='w-full'>
                    <Laptop className='size-3' />
                </Button>
            </div>
        )

    return (
        <div className='flex w-full flex-row items-center justify-between gap-x-2'>
            <Button
                className='w-full'
                size='sm'
                onClick={() => setTheme('light')}
                variant={theme === 'light' ? 'default' : 'secondary'}
            >
                <Sun className='size-3' />
            </Button>
            <Button
                className='w-full'
                size='sm'
                onClick={() => setTheme('dark')}
                variant={theme === 'dark' ? 'default' : 'secondary'}
            >
                <Moon className='size-3' />
            </Button>
            <Button
                className='w-full'
                size='sm'
                onClick={() => setTheme('system')}
                variant={theme === 'system' ? 'default' : 'secondary'}
            >
                <Laptop className='size-3' />
            </Button>
        </div>
    )
}
