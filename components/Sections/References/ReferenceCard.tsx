import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Reference } from './types'

export default function ReferenceCard({ name, url, icon, description, tags }: Readonly<Reference>): React.ReactElement {
    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
                {icon && <div className='flex w-full items-center justify-center'>{icon}</div>}
                {description && <CardDescription>{description}</CardDescription>}
                <div className='flex flex-row flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <Badge key={tag} variant='outline'>
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Link href={url} className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'w-full')}>
                    Ziyaret Et
                </Link>
            </CardFooter>
        </Card>
    )
}
