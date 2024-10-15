 
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
 

 
interface StatisticCardComponentProps {
   title :string;
   subTitle : string;
   amount: string ;
   icon:any,
   textColor?:string,
   cardColor?:string

}

export default function StatisticCardComponent({title, subTitle , amount , icon , textColor , cardColor} : StatisticCardComponentProps) {
  return (
    <Card x-chunk="dashboard-01-chunk-0"   style={{color:textColor, backgroundColor : cardColor }}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {title}
      </CardTitle>
      {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{amount}</div>
      <p className="text-xs color-white">
        {subTitle}
      </p>
    </CardContent>
  </Card>
  )
}
