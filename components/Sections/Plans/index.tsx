import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { plans } from '@/lib/plans'
import { PlanCard } from './PlanCard'

export default function PlansSection() {
    return (
        <SectionWrapper id='plans' title='Planlar'>
            <Carousel>
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
