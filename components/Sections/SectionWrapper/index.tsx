import React from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
    as?: React.ElementType
}

const SectionWrapper = React.forwardRef(
    (
        { children, className, id, title, description, as: Component = 'div', ...props }: Readonly<SectionWrapperProps>,
        ref: React.Ref<HTMLDivElement>
    ): React.ReactElement => {
        return (
            <Component
                id={id}
                className={cn('z-40 mt-6 flex h-dvh snap-start flex-col items-center justify-start', className)}
                ref={ref}
                {...props}
            >
                {title && (
                    <h1 className='sticky top-12 z-[101] w-full bg-white bg-opacity-50 p-3 pl-0 text-end text-6xl font-bold tracking-wide backdrop-blur-3xl dark:bg-[#121212]'>
                        {title}
                    </h1>
                )}
                {description && (
                    <p className='w-full p-2 pl-0 text-end font-sans text-xl font-semibold'>{description}</p>
                )}
                <div className='h-full w-full overflow-y-scroll px-4 pt-20'>{children}</div>
            </Component>
        )
    }
)
SectionWrapper.displayName = 'SectionWrapper'
export default SectionWrapper
