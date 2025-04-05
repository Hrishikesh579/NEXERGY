"use client"
import {DashboardLayout} from '@/components/dashboard-layout';
import  { Navbar } from '@/components/navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConsumptionChart } from "@/components/consumption-chart"
import { PowerSupplyChart } from "@/components/power-supply-chart"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Brain, LineChart, AlertTriangle } from "lucide-react"

export default function DemandSupplyPage() {
  return (
   <>
   <Navbar />
   <DashboardLayout>
    
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Demand & Supply Insights</h1>
        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
            <TabsTrigger value="forecast">Forecast</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Demand</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.3 GW</div>
            <p className="text-xs text-muted-foreground">+5% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Supply</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48.1 GW</div>
            <p className="text-xs text-muted-foreground">+2% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Forecast</CardTitle>
            <Brain className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.7 GW</div>
            <p className="text-xs text-muted-foreground">Expected at 7:00 PM</p>
            <div className="mt-3">
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                ML Prediction
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Supply Margin</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.8 GW</div>
            <p className="text-xs text-muted-foreground">-2.4 GW from yesterday</p>
            <div className="mt-3">
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                Caution
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Electricity Consumption Trend</CardTitle>
            <CardDescription>Hourly consumption pattern</CardDescription>
          </CardHeader>
          <CardContent>
            <ConsumptionChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supply vs. Peak Demand</CardTitle>
            <CardDescription>Monthly comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <PowerSupplyChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ML Predictions & Insights</CardTitle>
          <CardDescription>AI-powered demand forecasting and supply optimization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Brain className="h-4 w-4" />
            <AlertTitle>Demand Prediction (ML Model 1)</AlertTitle>
            <AlertDescription>
              Based on historical patterns and current weather forecast, we predict a 7% increase in demand tomorrow
              between 6-8 PM.
            </AlertDescription>
          </Alert>

          <Alert>
            <Brain className="h-4 w-4" />
            <AlertTitle>Supply Optimization (ML Model 3)</AlertTitle>
            <AlertDescription>
              Recommendation: Increase hydro generation by 5% during peak hours and reduce thermal generation during
              off-peak to optimize costs.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Critical Alert</AlertTitle>
            <AlertDescription>
              Potential supply shortage detected for next week if current demand trend continues. Consider implementing
              demand response measures.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
    </DashboardLayout>
    </>
  )
}

