
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface AppCardProps {
    title: string; 
    childrenTitleContent?: React.ReactNode;
    ChildrenExtraContent?: React.ReactNode;
    childrenContent: React.ReactNode;
}

export default function AppCard({ title,
    childrenTitleContent,
    ChildrenExtraContent,
    childrenContent }: AppCardProps) {
    return (
        <Card >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <div className="flex mr-auto gap-4" >
                    {childrenTitleContent}
                </div>
                <div className="ml-auto">
                    {ChildrenExtraContent}
                </div>
            </CardHeader>
            <CardContent>
                {childrenContent}
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}
