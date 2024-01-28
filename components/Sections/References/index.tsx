import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import references from './references'
import ReferenceCard from './ReferenceCard'

export default function ReferencesSection(): React.ReactElement {
    return (
        <SectionWrapper id='references' title='Referanslar'>
            <div className='mb-4 mt-4 flex flex-wrap items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
                {references.map((item) => (
                    <ReferenceCard key={item.id} {...item} />
                ))}
            </div>
        </SectionWrapper>
    )
}
