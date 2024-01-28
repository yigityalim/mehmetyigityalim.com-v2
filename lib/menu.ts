import type { MetadataRoute } from 'next'

export type Menu = {
    title: string
    name: string
    path: URL['pathname']
    icon?: string

    changefreq?: MetadataRoute.Sitemap[number]['changeFrequency']
    priority?: MetadataRoute.Sitemap[number]['priority']
}

export default [
    {
        title: 'İletişim',
        name: 'contact',
        path: 'contact',
        changefreq: 'monthly',
        priority: 0.8,
    },
    {
        title: 'Planlar',
        name: 'plan',
        path: 'plans',
        changefreq: 'daily',
        priority: 0.9,
    },
    {
        title: 'Referanslar',
        name: 'references',
        path: 'references',
        changefreq: 'weekly',
        priority: 0.8,
    },
    {
        title: 'Projeler',
        name: 'projects',
        path: 'projects',
        changefreq: 'weekly',
        priority: 0.8,
    },
    {
        title: 'Blog',
        name: 'blog',
        path: 'blog',
        changefreq: 'weekly',
        priority: 0.8,
    },
] as Menu[]
