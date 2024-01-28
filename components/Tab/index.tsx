'use client'

import React, { useState } from 'react'

import { useTabs } from '@/hooks/use-tabs'
import { Framer } from '@/lib/framer'

const Tabs = () => {
    const [hookProps] = useState({
        tabs: [
            {
                label: 'Overview',
                children: <div>overview</div>,
                id: 'Overview',
            },
            {
                label: 'Integrations',
                children: <div>Integrations</div>,
                id: 'Integrations',
            },
            {
                label: 'Activity',
                children: <div>Activity</div>,
                id: 'Activity',
            },
            {
                label: 'Domains',
                children: <div>Domains</div>,
                id: 'Domains',
            },
        ],
        initialTabId: 'Matches',
    })
    const framer = useTabs(hookProps)

    return (
        <div className='flex w-full flex-col'>
            <div className='flex w-full items-start border-b border-zinc-700 bg-zinc-950 px-8 pt-16'>
                <Framer.Tabs {...framer.tabProps} />
            </div>

            <div className='pt-10'>{framer.selectedTab.children}</div>
        </div>
    )
}

export default Tabs
