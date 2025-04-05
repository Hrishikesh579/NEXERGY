"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent, PieChart } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function SectorConsumption() {
  const [year, setYear] = useState("2022-23")

  const data = [
    { name: "Agriculture", value: 22.38 },
    { name: "Commercial", value: 8.56 },
    { name: "Domestic", value: 19.57 },
    { name: "Industrial", value: 42.34 },
    { name: "Others", value: 7.15 },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2020-21">2020-21</SelectItem>
            <SelectItem value="2021-22">2021-22</SelectItem>
            <SelectItem value="2022-23">2022-23</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ChartContainer
        config={{
          Agriculture: {
            label: "Agriculture",
            color: "#8BC34A",
          },
          Commercial: {
            label: "Commercial",
            color: "#03A9F4",
          },
          Domestic: {
            label: "Domestic",
            color: "#FF5722",
          },
          Industrial: {
            label: "Industrial",
            color: "#3F51B5",
          },
          Others: {
            label: "Others",
            color: "#9E9E9E",
          },
        }}
        className="aspect-square"
      >
        <PieChart
          data={data}
          nameKey="name"
          dataKey="value"
          innerRadius="0%"
          outerRadius="70%"
          label={({ name, value }) => `${name}: ${value}%`}
          labelLine={true}
        >
          <ChartTooltip>
            <ChartTooltipContent />
          </ChartTooltip>
        </PieChart>
      </ChartContainer>
    </div>
  )
}

