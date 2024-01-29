import React from 'react'
import { Plan } from '@/lib/types/plan'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { plans } from '@/lib/plans'
import { cn } from '@/lib/utils'

export default function PlanEdit({ type }: Readonly<{ type: Plan['type'] }>): React.ReactElement {
    const [plan, setPlan] = React.useState<Plan>(plans.find((plan) => plan.type === type) as Plan)
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle
                    className={cn('text-3xl font-bold', {
                        'text-indigo-500 dark:text-indigo-600': plan.type === 'standart',
                        'text-red-500 dark:text-red-600': plan.type === 'advanced',
                    })}
                >
                    {plan.name}
                </DialogTitle>
                <DialogDescription>{plan.description}</DialogDescription>
                <span>buraya plan içeriğini düzenleme gelecek.</span>
            </DialogHeader>
        </DialogContent>
    )
}
