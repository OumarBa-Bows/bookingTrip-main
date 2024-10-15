import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import StatisticCardComponent from "@/components/utils-component/statiscticCardComponent";
import { PersonStanding } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ActivityStats from "@/components/utils-component/analytics";
import SubscriberEvolution from "@/components/utils-component/analytics/subscriberEvolution";
import ActivityWorth from "@/components/utils-component/analytics/activityWorth";
import mapImage from '@/assets/images/map-image.jpg';

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatisticCardComponent
          title="Revenue"
          subTitle="test tder fr"
          amount="$87098"
          icon={<PersonStanding />}
          cardColor="green"
          textColor="white"
        />
        <StatisticCardComponent
          title="Revenue"
          subTitle="test tder fr"
          amount="$87098"
          icon={<PersonStanding />}
          cardColor="#2563eb"
          textColor="white"
        />
        <StatisticCardComponent
          title="Revenue"
          subTitle="test tder fr"
          amount="$87098"
          icon={<PersonStanding />}
          cardColor="black"
          textColor="white"
        />
        <StatisticCardComponent
          title="Revenue"
          subTitle="test tder fr"
          amount="$87098"
          icon={<PersonStanding />}
          cardColor="#F96B6B"
          textColor="white"
        />
      </div>

      <div className="flex grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-4">
        <Card>
          <ActivityStats />
        </Card>
        <Card className="min-h-[200px] px-2 py-2">
          <SubscriberEvolution />
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4  ">
          <Card style={{ backgroundImage:`url(${mapImage})` , backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >
             
          </Card>
          <Card className="w-full" x-chunk="charts-01-chunk-4">
            <CardContent className="flex gap-4 p-4 pb-2">
              <ActivityWorth />
            </CardContent>
            <CardFooter className="flex flex-row border-t p-4">
              <div className="flex w-full items-center gap-2">
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Move</div>
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    562
                    <span className="text-sm font-normal text-muted-foreground">
                      kcal
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Exercise</div>
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    73
                    <span className="text-sm font-normal text-muted-foreground">
                      min
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Stand</div>
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    14
                    <span className="text-sm font-normal text-muted-foreground">
                      hr
                    </span>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
         
      </div>
    </>
  );
};

export default Dashboard;
