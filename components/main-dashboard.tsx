"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { EnergyMap } from "@/components/energy-map"
import { ConsumptionChart } from "@/components/consumption-chart"
import { PowerSupplyChart } from "@/components/power-supply-chart"
import { EnergySourcesChart } from "@/components/energy-sources-chart"
import { WeatherWidget } from "@/components/weather-widget"
import { SectorConsumption } from "@/components/sector-consumption"
import { AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react"

export function MainDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">DASHBOARD</h1>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Grid Health</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.7%</div>
            <p className="text-xs text-muted-foreground">Stable across all regions</p>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Healthy
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Demand</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.3 GW</div>
            <p className="text-xs text-muted-foreground">+5% from yesterday</p>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                High
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Supply Capacity</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48.1 GW</div>
            <p className="text-xs text-muted-foreground">+2% from yesterday</p>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Sufficient
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Renewable Share</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.4%</div>
            <p className="text-xs text-muted-foreground">+3.2% from last week</p>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Increasing
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Energy Distribution Map</CardTitle>
            <CardDescription>Current energy flow across regions</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <EnergyMap />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Recent system notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Critical</AlertTitle>
              <AlertDescription>Substation overload in North Region. Redirecting power flow.</AlertDescription>
            </Alert>
            <Alert variant="default">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>Peak demand expected between 6-8 PM today.</AlertDescription>
            </Alert>
            <Alert variant="default">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>Wind generation expected to drop by 15% tomorrow.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Electricity Consumption</CardTitle>
            <CardDescription>Average consumption readings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ConsumptionChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Power Supply vs. Peak Demand</CardTitle>
            <CardDescription>Comparison for current month</CardDescription>
          </CardHeader>
          <CardContent>
            <PowerSupplyChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Energy Sources</CardTitle>
            <CardDescription>Distribution by generation type</CardDescription>
          </CardHeader>
          <CardContent>
            <EnergySourcesChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weather Impact</CardTitle>
            <CardDescription>Current weather affecting energy production</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <WeatherWidget />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector Consumption</CardTitle>
            <CardDescription>Energy usage by sector</CardDescription>
          </CardHeader>
          <CardContent>
            <SectorConsumption />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

