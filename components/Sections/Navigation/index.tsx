'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import menu, { Menu } from '@/lib/menu'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Link from 'next/link'

export default function NavigationSection(): React.ReactElement {
    const [active, setActive] = React.useState<Menu>(menu[0])
    return (
        <div className='no-scrollbar sticky left-0 right-0 top-0 z-[9999] flex w-full flex-row items-center justify-between gap-x-2 overflow-x-auto px-4 py-2 shadow-sm backdrop-blur-xl'>
            {menu.map(({ path, title, name }, i) => (
                <Button
                    key={path + name}
                    size='sm'
                    variant={active === menu[i] ? 'link' : 'ghost'}
                    asChild
                    onClick={() => setActive(menu[i])}
                >
                    <Link href={`#${path}`} passHref>
                        {title}
                    </Link>
                </Button>
            ))}
            <ThemeSwitcher />
        </div>
    )
}
