import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { plans } from '@/lib/plans'
import { PlanCard } from './PlanCard'
import { randomBytes } from 'crypto'

export default function PlansSection(): React.ReactElement {
    return (
        <SectionWrapper id='plans' title='Planlar'>
            <Carousel>
                <CarouselContent>
                    {plans.map((plan) => (
                        <CarouselItem key={randomBytes(4).toString('hex')}>
                            <PlanCard plan={plan} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>
        </SectionWrapper>
    )
}
