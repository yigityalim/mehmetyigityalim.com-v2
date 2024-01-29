import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { plans } from '@/lib/plans'
import { PlanCard } from './PlanCard'

export default async function PlansSection(): Promise<React.ReactElement> {
    return (
        <SectionWrapper id='plans' title='Planlar' className='no-scrollbar'>
            <Carousel className='pb-6'>
                <CarouselContent>
                    {plans.map((plan) => (
                        <CarouselItem key={plan.name}>
                            <PlanCard plan={plan} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </SectionWrapper>
    )
}
