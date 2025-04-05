"use client"
import  { Navbar } from '@/components/navbar';
import {DashboardLayout} from '@/components/dashboard-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { EnergySourcesChart } from "@/components/energy-sources-chart"
import { WeatherWidget } from "@/components/weather-widget"
import { Sun, Wind, Droplet, TrendingUp } from "lucide-react"

export default function RenewableEnergyPage() {
  return (
    <>
   <Navbar />
   <DashboardLayout>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Renewable Energy Tracking</h1>
        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="forecast">Forecast</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solar Generation</CardTitle>
            <Sun className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10.7 GW</div>
            <p className="text-xs text-muted-foreground">42% of capacity</p>
            <div className="mt-3">
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                Moderate
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wind Generation</CardTitle>
            <Wind className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.3 GW</div>
            <p className="text-xs text-muted-foreground">38% of capacity</p>
            <div className="mt-3">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Moderate
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hydro Generation</CardTitle>
            <Droplet className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.1 GW</div>
            <p className="text-xs text-muted-foreground">65% of capacity</p>
            <div className="mt-3">
              <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
                Good
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbon Saved</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14.2K tons</div>
            <p className="text-xs text-muted-foreground">Today's estimate</p>
            <div className="mt-3">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                +8% vs. last week
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Energy Sources Distribution</CardTitle>
            <CardDescription>Current energy mix by source type</CardDescription>
          </CardHeader>
          <CardContent>
            <EnergySourcesChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weather Impact on Renewables</CardTitle>
            <CardDescription>Current weather affecting renewable generation</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <WeatherWidget />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Renewable Energy Forecast</CardTitle>
          <CardDescription>Predicted generation capacity for next 24 hours</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Sun className="h-4 w-4" />
            <AlertTitle>Solar Forecast</AlertTitle>
            <AlertDescription>
              Expected to reach 65% capacity tomorrow with clear skies forecasted. Peak generation between 11 AM - 2 PM.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <Wind className="h-4 w-4" />
            <AlertTitle>Wind Alert</AlertTitle>
            <AlertDescription>
              Wind generation expected to drop by 25% tomorrow due to decreasing wind speeds. Consider adjusting grid
              distribution.
            </AlertDescription>
          </Alert>

          <Alert>
            <Droplet className="h-4 w-4" />
            <AlertTitle>Hydro Forecast</AlertTitle>
            <AlertDescription>
              Stable generation expected with recent rainfall increasing reservoir levels by 3%.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
    </DashboardLayout>
    </>
  )
}

