import { Navbar } from "@/components/navbar"
import { DashboardLayout } from "@/components/dashboard-layout"
import { MainDashboard } from "@/components/main-dashboard"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <DashboardLayout>
        <MainDashboard />
      </DashboardLayout>
    </div>
  )
}

