import { Button } from "@/components/ui/button"
import { AppointmentsTable } from "@/components/appointments-table"

export default function AppointmentsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 py-4 md:py-6">
      <div className="mx-4 lg:mx-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Appointments</h1>
          <p className="text-sm text-muted-foreground">
            Here is the list of your appointments.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          + Create New Appt.
        </Button>
      </div>
      <AppointmentsTable />
    </div>
  )
}