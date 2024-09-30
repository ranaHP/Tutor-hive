"use client"

import * as React from "react"
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

export const description = "An interactive line chart"
const chartData = [
    { quizeDate: "9/21/2024", attendance: 81},
    { quizeDate: "9/22/2024", attendance: 120},
    { quizeDate: "9/23/2024", attendance: 130},
    { quizeDate: "9/24/2024", attendance: 440},
    { quizeDate: "9/25/2024", attendance: 50},
    { quizeDate: "9/26/2024", attendance: 20 },
    { quizeDate: "9/27/2024", attendance: 12 },
    { quizeDate: "9/28/2024", attendance: 190 },
    { quizeDate: "9/29/2024", attendance: 130 },
    { quizeDate: "9/30/2024", attendance: 140 },
  ]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  quizes: {
    label: "Students",
    color: "hsl(var(--chart-1))",
  },
  attendance: {
    label: "Quizes",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function AttendanceChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("quizes")

  const total = React.useMemo(
    () => ({
      quizes: chartData.length,
      attendance: chartData.reduce((acc, curr) => acc + curr.attendance, 0),
    }),
    []
  )

  return (
    <Card className="w-full pb-2  ">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row ">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6 ">
          <CardTitle>Attendance Insights:</CardTitle>
          <CardDescription className="w-full">
           Showing total attendance 
           {/* for the last quizzes */}
          </CardDescription>
        </div>
        <div className="flex">
          {["quizes", "attendance"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 "
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <XAxis
              dataKey="quizeDate"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
             <YAxis
              dataKey="attendance"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            //   tickFormatter={(value) => value.slice(0, 3)}
            />
                      <Legend />
                      <CartesianGrid strokeDasharray="3 3" />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="quizes"
              type="monotone"
              stroke="var(--color-quizes)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="attendance"
              type="monotone"
              stroke="var(--color-attendance)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
