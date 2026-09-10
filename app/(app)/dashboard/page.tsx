import { AppSidebar } from "@/components/app-sidebar";
import { ChartPayments } from "@/components/chart-payments";
import { PrescriptionsTable } from "@/components/prescriptions-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChartAppointments } from "@/components/chart-appointments";
import { UpcomingAppointments } from "@/components/upcoming-appointments";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "16.25rem",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="px-8 pt-11">
          <h1 className="text-[32px] font-semibold  text-[#25272C] leading-none">
            Dashboard
          </h1>
          <p className="mt-4 text-base font-normal leading-[100%] text-[#8E95A2] pt-[-4px]">
            Manage your profile settings and information.
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 lg:px-6">
                <ChartPayments />
                <ChartAppointments />
                <UpcomingAppointments />
              </div>
              <PrescriptionsTable />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
