import React from 'react'
import SectionWrapper from '@/components/Sections/SectionWrapper'
import { GithubRepositoryType } from '@/lib/types/github'
import { VercelProject as VercelProjectType } from '@/lib/types/vercel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { GithubProject } from './GithubProject'
import { VercelProject } from './VercelProject'

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
        <SectionWrapper id='projects' title='Projeler'>
            <h1 className='my-6 w-full text-end text-xl font-semibold'>İşte! şu ana kadar yaptığım tüm projelerim</h1>
            <Tabs defaultValue='github'>
                <TabsList className='mb-4 grid grid-cols-2'>
                    <TabsTrigger value='github'>Github</TabsTrigger>
                    <TabsTrigger value='vercel'>Vercel</TabsTrigger>
                </TabsList>
                <TabsContent value='github'>
                    <GithubProject repo={githubData} />
                </TabsContent>
                <TabsContent value='vercel'>
                    <VercelProject projects={vercelData} />
                </TabsContent>
            </Tabs>
            <Button>Daha fazlası için tıkla</Button>
        </SectionWrapper>
    )
}
