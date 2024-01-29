'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, CircleDashed, Edit, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn, formatPrice } from '@/lib/utils'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { cva } from 'class-variance-authority'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import PlanEdit from '@/components/Sections/Plans/PlanEdit'

type planageCardProps = Readonly<{ plan: import('@/lib/types/plan').Plan }>

const planVariants = cva('', {
    variants: {
        heading: {
            basic: '',
            standart: 'text-indigo-500 dark:text-indigo-600',
            advanced: 'text-red-500 dark:text-red-600',
        },
        backdrop: {
            basic: '',
            standart: 'bg-gradient-to-r from-pink-900 to-purple-600',
            advanced: 'bg-gradient-to-r from-red-900 to-yellow-800',
        },
        border: {
            basic: '',
            standart: 'z-30 border-2 border-indigo-500 dark:border-indigo-700',
            advanced: 'z-30 border-2 border-red-500 dark:border-red-700',
        },
        top: {
            basic: '',
            standart:
                'border-indigo-400 text-indigo-400 dark:border-indigo-700 bg-zinc-100 dark:bg-zinc-950 dark:text-indigo-600',
            advanced: 'border-red-500 text-red-500 dark:border-red-700 dark:bg-zinc-950 bg-zinc-100 dark:text-red-600',
        },
        button: {
            basic: 'default',
            standart: 'indigo',
            advanced: 'destructive',
        },
        addPrice: {
            basic: '',
            standart: 'text-white bg-indigo-500 dark:bg-indigo-700 dark:text-indigo-300',
            advanced: 'text-white bg-red-500 dark:bg-red-700 dark:text-red-300',
        },
    },
})

export function PlanCard({ plan }: planageCardProps) {
    React.useEffect(() => {}, [plan])
    return (
        <div className='relative h-full w-full' key={plan.id}>
            <SubCard
                plan={plan.type}
                className={planVariants({ backdrop: plan.type })}
                condition={plan.mostPopular ?? plan.recommended}
                type='backdrop'
            />
            <Card
                className={cn(
                    'relative flex min-h-full flex-col items-start justify-between bg-gray-100 dark:bg-black',
                    (plan.mostPopular || plan.recommended) && planVariants({ border: plan.type })
                )}
            >
                <SubCard
                    plan={plan.type}
                    text={plan.mostPopular ? 'En Popüler' : 'Önerilen'}
                    condition={plan.mostPopular ?? plan.recommended}
                    type='top'
                    className={planVariants({ top: plan.type })}
                />
                <CardHeader>
                    <div className='flex w-full items-center justify-between gap-x-2'>
                        <h1 className={cn('text-3xl font-bold', planVariants({ heading: plan.type }))}>{plan.name}</h1>
                        <Dialog>
                            <DialogTrigger>
                                <Edit
                                    className={cn('h-4 w-4', {
                                        'text-red-500': plan.type === 'advanced',
                                        'text-indigo-500': plan.type === 'standart',
                                        'text-gray-500': plan.type === 'basic',
                                    })}
                                />
                            </DialogTrigger>
                            <PlanEdit type={plan.type} />
                        </Dialog>
                    </div>
                    <CardTitle>
                        {formatPrice(plan.price)}
                        <span className='ml-1 text-xs text-gray-500 dark:text-gray-400'>ort.</span>
                    </CardTitle>
                    <CardDescription className='text-xs'>{plan?.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex w-full flex-col items-center justify-start gap-y-2'>
                    <SubCard
                        plan={plan.type}
                        text={`${plan.pageNumbers.page} Sayfa`}
                        condition={plan.pageNumbers.page > 1}
                        type='feature'
                    />
                    <SubCard
                        plan={plan.type}
                        text={`${plan.revisions.revision} Revizyon Hakkı`}
                        condition={plan.revisions.revision > 0}
                        type='feature'
                    />
                    <HoverCard>
                        <HoverCardTrigger className='hidden w-full cursor-pointer'>
                            <SubCard
                                plan={plan.type}
                                text={plan.framework.find((fw) => fw.index)?.name}
                                condition={!!plan.framework}
                                type='feature'
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            The React Framework – created and maintained by @vercel.{' '}
                            {plan.framework.find(({ index }) => index)?.name}
                        </HoverCardContent>
                    </HoverCard>
                    <SubCard
                        plan={plan.type}
                        text='TypeScript'
                        condition={plan.optionals.typeScript.has}
                        type='feature'
                    />
                    <SubCard plan={plan.type} text='Tasarım' condition={plan.optionals.design.has} type='feature' />
                    <SubCard plan={plan.type} text='Testing' condition={plan.optionals.testing.has} type='feature' />
                    <SubCard
                        plan={plan.type}
                        text='Oturum İşlemleri'
                        condition={plan.optionals.auth.has}
                        type='feature'
                    />
                    <SubCard
                        plan={plan.type}
                        text='Ödeme Sistemi'
                        condition={plan.optionals.payment.has}
                        type='feature'
                    />
                    <SubCard
                        plan={plan.type}
                        text='SEO Optimizasyonu'
                        condition={plan.optionals.seo.has}
                        type='feature'
                    />
                    <SubCard plan={plan.type} text='Analitik' condition={plan.optionals.analytics.has} type='feature' />
                    <SubCard plan={plan.type} text='Hosting' condition={plan.optionals.hosting.has} type='feature' />
                    <SubCard plan={plan.type} text='DNS' condition={plan.optionals.dns.has} type='feature' />
                    <SubCard
                        plan={plan.type}
                        text='Çoklu Dil Desteği'
                        condition={plan.optionals.i18n.has}
                        type='feature'
                    />
                </CardContent>
                <CardFooter
                    className={cn(
                        'mt-auto w-full',
                        plan.button.length === 1 ? 'justify-center' : 'justify-between gap-x-2'
                    )}
                >
                    {plan.button.map(({ colorVariant, supPage, href, text }) => (
                        <Button
                            key={href}
                            className='w-full gap-x-2 shadow-2xl'
                            variant={colorVariant}
                            size='sm'
                            asChild
                        >
                            <Link href={supPage ? href : `#${href}`}>
                                {text} <ArrowRight className='h-4 w-4' />
                            </Link>
                        </Button>
                    ))}
                </CardFooter>
            </Card>
        </div>
    )
}

type SubCardProps = {
    text?: string
    condition?: boolean
    type?: 'feature' | 'backdrop' | 'top' | undefined
    className?: string
    plan: import('@/lib/types/plan').Plan['type']
}

export function SubCard({ text, condition, type, className, plan }: SubCardProps) {
    const [edit, setEdit] = React.useState<boolean>(false)
    const classNames: string = cn(className, {
        'absolute -inset-0.5 rounded-lg opacity-75 blur transition duration-1000 group-hover:opacity-100':
            type === 'backdrop',
        'absolute -top-4 left-1/2 -translate-x-1/2 rounded-md border px-2 py-1 font-semibold': type === 'top',
        'inline-flex w-full flex-row items-center justify-start gap-x-2': type === 'feature',
    })

    return condition ? (
        <div className={type ? classNames : className}>
            {type === 'feature' ? (
                <div className='flex w-full items-center justify-between gap-x-2'>
                    <div
                        className={cn('flex items-center justify-start gap-x-2', edit && 'text-gray-400 line-through')}
                    >
                        {edit ? <CircleDashed className='size-4' /> : <CheckCircle2 className='size-4' />} {text}
                    </div>
                    <button
                        onClick={() => {
                            setEdit((prev) => !prev)
                        }}
                        className={cn('rounded bg-indigo-500 px-2 py-1 text-white dark:text-black', {
                            'bg-red-500': plan === 'advanced',
                            'bg-indigo-500': plan === 'standart',
                            'bg-gray-800': plan === 'basic',
                        })}
                    >
                        {edit ? <Plus className='size-4' /> : <X className='size-4' />}
                    </button>
                </div>
            ) : (
                text
            )}
        </div>
    ) : null
}
