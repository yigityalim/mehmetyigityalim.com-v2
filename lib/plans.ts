import type { Plan, OptionPrices, HasAddPlan } from '@/lib/types/plan'

export const plans: Plan[] = [
    {
        id: 'basic',
        name: 'Başlangıç',
        type: 'basic',
        description:
            'Temel web siteleri için ideal bir başlangıç. HTML, CSS ve JS ile oluşturulmuş, kullanımı kolay ve hızlı.',
        price: 10000,
        pageNumbers: {
            page: 2,
            min: 1,
            max: 3,
            cost: 1000,
        },
        revisions: {
            revision: 2,
            min: 0,
            max: 5,
            cost: 1000,
        },
        framework: [
            {
                index: true,
                name: 'HTML, CSS, JS',
                cost: 0,
            },
            {
                name: 'Vite.js',
                description: 'Hızlı Web Uygulamaları için',
                cost: 1000,
            },
        ],
        optionals: {
            typeScript: { cost: 0, has: false },
            testing: { cost: 0, has: false },
            design: { cost: 0, has: false },
            auth: { cost: 0, has: false },
            payment: { cost: 0, has: false },
            seo: { cost: 0, has: false },
            analytics: { cost: 0, has: false },
            hosting: { cost: 0, has: false },
            dns: { cost: 0, has: false },
            i18n: { cost: 0, has: false },
        },
        button: [
            {
                border: false,
                colorVariant: 'default',
                text: 'Hemen Başla',
                href: 'basic',
            },
        ],
    },
    {
        id: 'standart',
        name: 'Orta',
        type: 'standart',
        description:
            'Vite.js ile güçlendirilmiş, hızlı ve modern web siteleri için ideal. TypeScript desteğiyle performansı artırın.',
        price: 15000,
        pageNumbers: {
            page: 3,
            min: 1,
            max: 5,
            cost: 1000,
        },
        revisions: {
            revision: 4,
            min: 0,
            max: 7,
            cost: 1000,
        },
        framework: [
            {
                id: 0,
                index: true,
                name: 'Vite.js',
                description: 'Hızlı Web Uygulamaları için',
                cost: 0,
            },
            {
                id: 1,
                name: 'Next.js',
                description: 'En Gelişmiş Web Uygulamaları için',
                cost: 1000,
            },
        ],
        optionals: {
            typeScript: { cost: 0, has: true },
            testing: { cost: 0, has: false },
            design: { cost: 0, has: true },
            auth: { cost: 0, has: false },
            payment: { cost: 0, has: false },
            seo: { cost: 0, has: false },
            analytics: { cost: 0, has: true },
            hosting: { cost: 0, has: false },
            dns: { cost: 0, has: true },
            i18n: { cost: 0, has: true },
        },
        mostPopular: true,
        button: [
            {
                border: true,
                text: 'Teklif Al',
                href: 'standart',
                colorVariant: 'indigo',
            },
        ],
    },
    {
        id: 'advanced',
        name: 'Gelişmiş',
        type: 'advanced',
        description:
            'Next.js ile en gelişmiş web sitelerini oluşturun. TypeScript, testler, oturum yönetimi, ödeme entegrasyonu ve SEO desteği ile güçlendirilmiş.',
        price: 20000,
        pageNumbers: {
            page: 4,
            min: 1,
            max: 7,
            cost: 1000,
        },
        revisions: {
            revision: 6,
            min: 0,
            max: 10,
            cost: 1000,
        },
        framework: [
            {
                id: 0,
                index: true,
                name: 'Next.js',
                description: 'En Gelişmiş Web Uygulamaları için',
                cost: 0,
            },
        ],
        optionals: {
            typeScript: { cost: 2000, has: true },
            testing: { cost: 4000, has: true },
            design: { cost: 3000, has: true },
            auth: { cost: 5000, has: true },
            payment: { cost: 5000, has: true },
            seo: { cost: 5000, has: true },
            analytics: { cost: 2000, has: true },
            hosting: { cost: 1500, has: true },
            dns: { cost: 1000, has: true },
            i18n: { cost: 2000, has: true },
        },
        recommended: true,
        button: [
            {
                border: true,
                text: 'Destek Al',
                href: '#contact',
                supPage: true as boolean,
                colorVariant: 'default',
            },
            {
                border: false,
                text: 'Özel Teklif Al',
                href: 'advanced',
                colorVariant: 'red',
            },
        ],
    },
] as Plan[]

export const optionPrices: OptionPrices = {
    pageNumber: 1000,
    revision: 800,
    framework: [
        {
            tech: 'Vite.js',
            cost: 2000,
        },
        {
            tech: 'Next.js',
            cost: 4000,
        },
    ],
    typeScript: 1000,
    testing: 2000,
    design: 500,
    auth: 5000,
    payment: 5000,
    seo: 3000,
    analytics: 1000,
    hosting: 1000,
    dns: 500,
    i18n: 2000,
} as OptionPrices

export const hasAddPlan = [
    {
        type: 'basic',
        add: ['pageNumber', 'revision', 'dns', 'design', 'hosting'],
        priceValue: {
            min: 8000,
            max: 14999,
        },
    },
    {
        type: 'standart',
        add: ['pageNumber', 'design', 'revision', 'typeScript', 'testing', 'analytics', 'dns', 'i18n'],
        priceValue: {
            min: 15000,
            max: 19999,
        },
    },
    {
        type: 'advanced',
        add: [
            'pageNumber',
            'revision',
            'typeScript',
            'testing',
            'design',
            'auth',
            'payment',
            'seo',
            'analytics',
            'hosting',
            'dns',
            'i18n',
        ],
        priceValue: {
            min: 20000,
            max: Infinity,
        },
    },
] as HasAddPlan[]
