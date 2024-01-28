import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function Footer(): React.ReactElement {
    return (
        <SectionWrapper as='footer' title='Footer' className='p-6'>
            <ThemeSwitcher />
        </SectionWrapper>
    )
}
