import { ReactNode } from 'react'

export interface Reference {
    id: number
    name: string
    url: string
    icon?: ReactNode
    description?: string
    tags: string[]
}
