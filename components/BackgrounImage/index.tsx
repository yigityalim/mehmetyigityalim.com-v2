import React from 'react'
import Image from 'next/image'

export default function BackgrounImage(): React.ReactElement {
    return (
        <>
            <Image
                src='/hero.PNG'
                fill
                quality={50}
                loading='lazy'
                className='fixed left-0 right-0 top-0 -z-[100] hidden h-full w-full object-cover object-top opacity-70 blur-3xl saturate-200 sm:block'
                alt='image'
            />
            <div className='bg-primary fixed left-0 right-0 top-0 -z-[99] h-full w-full opacity-70 sm:block' />
        </>
    )
}
