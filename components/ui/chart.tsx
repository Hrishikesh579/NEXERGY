"use client"

import type React from "react"

import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  BarChart as RechartsBarChart,
  Line,
  Pie,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts"
import { cn } from "@/lib/utils"

interface ChartContainerProps {
  children: React.ReactNode
  config: any
  className?: string
}

export function ChartContainer({ children, config, className }: ChartContainerProps) {
  return (
    <TooltipProvider>
      <div className={cn("rounded-md border bg-card text-card-foreground shadow-sm", className)} data-v0-t="card">
        {children}
      </div>
    </TooltipProvider>
  )
}

interface ChartTooltipProps {
  children?: React.ReactNode
}

export function ChartTooltip({ children }: ChartTooltipProps) {
  return children
}

interface ChartTooltipContentProps {
  children?: React.ReactNode
}

export function ChartTooltipContent({ children }: ChartTooltipContentProps) {
  return <TooltipContent>{children}</TooltipContent>
}

interface LineChartProps {
  data: any[]
  xAxisKey: string
  series: { key: string; type: string; strokeWidth: number; dot: boolean }[]
  children?: React.ReactNode
}

export function LineChart({ data, xAxisKey, series, children }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Line
            key={s.key}
            type="monotone"
            dataKey={s.key}
            strokeWidth={s.strokeWidth}
            stroke="hsl(var(--primary))"
            dot={s.dot}
          />
        ))}
        {children}
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

interface PieChartProps {
  data: any[]
  nameKey: string
  dataKey: string
  innerRadius: string | number
  outerRadius: string | number
  paddingAngle: number
  label?: ({ name, value }: { name: string; value: number }) => string
  labelLine?: boolean
  children?: React.ReactNode
}

export function PieChart({
  data,
  nameKey,
  dataKey,
  innerRadius,
  outerRadius,
  paddingAngle,
  label,
  labelLine,
  children,
}: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={paddingAngle}
          label={label}
          labelLine={labelLine}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
        {children}
      </RechartsPieChart>
    </ResponsiveContainer>
  )
}

interface BarChartProps {
  data: any[]
  xAxisKey: string
  series: { key: string; label: string }[]
  children?: React.ReactNode
}

export function BarChart({ data, xAxisKey, series, children }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Bar key={s.key} dataKey={s.key} fill="hsl(var(--primary))" />
        ))}
        {children}
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

