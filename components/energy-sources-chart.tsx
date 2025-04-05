"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent, PieChart } from "@/components/ui/chart"

export function EnergySourcesChart() {
  const data = [
    { name: "Solar", value: 25 },
    { name: "Wind", value: 15 },
    { name: "Hydro", value: 12 },
    { name: "Nuclear", value: 8 },
    { name: "Coal", value: 27 },
    { name: "Gas", value: 13 },
  ]

  return (
    <ChartContainer
      config={{
        Solar: {
          label: "Solar",
          color: "#FFD700",
        },
        Wind: {
          label: "Wind",
          color: "#87CEEB",
        },
        Hydro: {
          label: "Hydro",
          color: "#1E90FF",
        },
        Nuclear: {
          label: "Nuclear",
          color: "#9370DB",
        },
        Coal: {
          label: "Coal",
          color: "#A52A2A",
        },
        Gas: {
          label: "Gas",
          color: "#FF7F50",
        },
      }}
      className="aspect-square"
    >
      <PieChart data={data} nameKey="name" dataKey="value" innerRadius="50%" outerRadius="80%" paddingAngle={2}>
        <ChartTooltip>
          <ChartTooltipContent />
        </ChartTooltip>
      </PieChart>
    </ChartContainer>
  )
}

