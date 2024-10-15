import { ChartContainer } from '@/components/ui/chart'
import { Bar,
    BarChart,
    LabelList, 
    XAxis,
    YAxis, } from 'recharts';

export default function ActivityWorth() {
  return (
    <ChartContainer
    config={{
      move: {
        label: "Move",
        color: "hsl(var(--chart-1))",
      },
      stand: {
        label: "Stand",
        color: "hsl(var(--chart-2))",
      },
      exercise: {
        label: "Exercise",
        color: "hsl(var(--chart-3))",
      },
    }}
    className="h-[140px] w-full"
  >
    <BarChart
      margin={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 10,
      }}
      data={[
        {
          activity: "stand",
          value: (8 / 12) * 100,
          label: "8/12 hr",
          fill: "var(--color-stand)",
        },
        {
          activity: "exercise",
          value: (46 / 60) * 100,
          label: "46/60 min",
          fill: "var(--color-exercise)",
        },
        {
          activity: "move",
          value: (245 / 360) * 100,
          label: "245/360 kcal",
          fill: "var(--color-move)",
        },
      ]}
      layout="vertical"
      barSize={32}
      barGap={2}
    >
      <XAxis type="number" dataKey="value" hide />
      <YAxis
        dataKey="activity"
        type="category"
        tickLine={false}
        tickMargin={4}
        axisLine={false}
        className="capitalize"
      />
      <Bar dataKey="value" radius={5}>
        <LabelList
          position="insideLeft"
          dataKey="label"
          fill="white"
          offset={8}
          fontSize={12}
        />
      </Bar>
    </BarChart>
  </ChartContainer>
  )
}
