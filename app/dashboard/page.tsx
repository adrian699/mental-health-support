import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mental Health Tracker</CardTitle>
            <CardDescription>Track your daily mood and well-being</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add mood tracking component here */}
            <p>Mood tracking functionality coming soon!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>View and manage your therapy sessions</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add appointment management component here */}
            <p>Appointment management functionality coming soon!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

