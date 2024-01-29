import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import { GithubRepositoryType } from '@/lib/types/github'
import { VercelProject as VercelProjectType } from '@/lib/types/vercel'
import { Button } from '@/components/ui/button'
import { GithubProject } from './GithubProject'
import { VercelProject } from './VercelProject'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export default async function ProjectsSection(): Promise<React.ReactElement> {
    const [githubRes, vercelRes] = await Promise.all([
        fetch(process.env.GITHUB_USER_URL!),
        fetch(process.env.VERCEL_USER_URL!, {
            headers: {
                Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
            },
        }),
    ])

    const [githubData, vercelData] = (await Promise.all([githubRes.json(), vercelRes.json()])) as [
        GithubRepositoryType[],
        VercelProjectType,
    ]

    return (
        <SectionWrapper as='section' id='projects' title='Projeler'>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <GithubProject repo={githubData} />
                    </CarouselItem>
                    <CarouselItem>
                        <VercelProject projects={vercelData} />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </SectionWrapper>
    )
}
