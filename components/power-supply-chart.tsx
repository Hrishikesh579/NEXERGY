"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent, BarChart } from "@/components/ui/chart"

export function PowerSupplyChart() {
  const data = [
    { month: "Mar 2024", peakDemand: 42, supply: 48 },
    { month: "Apr 2024", peakDemand: 45, supply: 48 },
  ]

  return (
    <ChartContainer
      config={{
        peakDemand: {
          label: "Peak Demand",
          color: "hsl(var(--chart-1))",
        },
        supply: {
          label: "Supply",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="aspect-[4/3]"
    >
      <BarChart
        data={data}
        xAxisKey="month"
        series={[
          { key: "peakDemand", label: "Peak Demand" },
          { key: "supply", label: "Supply" },
        ]}
      >
        <ChartTooltip>
          <ChartTooltipContent />
        </ChartTooltip>
      </BarChart>
    </ChartContainer>
  )
}

