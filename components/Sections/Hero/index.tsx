import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import Image from 'next/image'

export default function HeroSection(): React.ReactElement {
    return (
        <SectionWrapper className='mt-0 bg-black md:mt-16'>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Image
                    src='/hero.PNG'
                    alt='Mehmet Yiğit Yalım profil resmi'
                    fill
                    priority
                    quality={100}
                    className='z-10 h-full w-full object-cover'
                />
            </React.Suspense>
            <h1 className='font-roboto absolute bottom-2 left-0 right-0 z-[53] px-2 text-end font-sans text-6xl font-black text-black dark:text-gray-300 xs:text-8xl phone:text-9xl md:bottom-20'>
                Mehmet Yiğit Yalım
            </h1>
            <div className='absolute bottom-0 left-0 right-0 top-1/2 z-[52] bg-gradient-to-t from-white to-transparent dark:from-black' />
        </SectionWrapper>
    )
}
