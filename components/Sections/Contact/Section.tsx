import React from 'react'

export default function Section({
    children,
    icon,
    title,
}: Readonly<{ children: React.ReactNode; icon: React.ReactNode; title: string }>): React.ReactElement {
    return (
        <div className='mb-4 flex flex-col items-start justify-center gap-y-1 rounded-md bg-gray-100 p-2 dark:bg-zinc-800'>
            <div className='flex items-center gap-2'>
                <div className='text-blue-500'>{icon}</div>
                <h2 className='text-lg font-semibold'>{title}</h2>
            </div>
            <p className='w-full text-lg font-medium'>{children}</p>
        </div>
    )
}
