"use client"

import { Cloud, CloudRain, Wind } from "lucide-react"

export function WeatherWidget() {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <div className="flex items-center justify-center mb-4">
        <Cloud className="h-16 w-16 text-gray-400" />
      </div>
      <div className="text-4xl font-bold mb-2">5°C</div>
      <div className="flex items-center gap-2 mb-2">
        <Wind className="h-4 w-4" />
        <span>65 KM/H E</span>
      </div>
      <div className="flex items-center gap-2">
        <CloudRain className="h-4 w-4" />
        <span>Estimated rain 55%</span>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">Wind energy production reduced by 15%</div>
    </div>
  )
}

