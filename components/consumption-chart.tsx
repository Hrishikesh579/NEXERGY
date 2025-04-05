"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent, LineChart } from "@/components/ui/chart"

export function ConsumptionChart() {
  const data = [
    { time: "00:00", consumption: 8, temperature: 18 },
    { time: "02:00", consumption: 6, temperature: 16 },
    { time: "04:00", consumption: 5, temperature: 14 },
    { time: "06:00", consumption: 9, temperature: 15 },
    { time: "08:00", consumption: 12, temperature: 19 },
    { time: "10:00", consumption: 14, temperature: 24 },
    { time: "12:00", consumption: 13, temperature: 28 },
    { time: "14:00", consumption: 12, temperature: 30 },
    { time: "16:00", consumption: 13, temperature: 28 },
    { time: "18:00", consumption: 15, temperature: 25 },
    { time: "20:00", consumption: 14, temperature: 22 },
    { time: "22:00", consumption: 11, temperature: 20 },
  ]

  return (
    <ChartContainer
      config={{
        consumption: {
          label: "Consumption (GW)",
          color: "hsl(var(--chart-1))",
        },
        temperature: {
          label: "Temperature (°C)",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="aspect-[4/3]"
    >
      <LineChart
        data={data}
        xAxisKey="time"
        series={[
          {
            key: "consumption",
            type: "line",
            strokeWidth: 2,
            dot: true,
          },
          {
            key: "temperature",
            type: "line",
            strokeWidth: 2,
            dot: true,
          },
        ]}
      >
        <ChartTooltip>
          <ChartTooltipContent />
        </ChartTooltip>
      </LineChart>
    </ChartContainer>
  )
}

