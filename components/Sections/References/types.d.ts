import { ReactNode } from 'react'

export interface Reference {
    id: string
    name: string
    url: string
    icon?: ReactNode
    description?: string
    tags: string[]
}
