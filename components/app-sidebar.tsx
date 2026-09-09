"use client"
import * as React from 'react'
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import Image from "next/image"
import {
  LayoutDashboardIcon,
  CalendarIcon,
  ClipboardListIcon,
  HistoryIcon,
  WalletIcon,
  RotateCcwIcon,
  StarIcon,
  Settings2Icon,
 } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
 navMain: [
  { title: "Dashboard", url: "/dashboard", icon: (<LayoutDashboardIcon />) },
  { title: "Appointments", url: "#", icon: (<CalendarIcon />) },
  { title: "Prescriptions", url: "#", icon: (<ClipboardListIcon />) },
  { title: "Medical History", url: "#", icon: (<HistoryIcon />) },
  { title: "Payments", url: "#", icon: (<WalletIcon />) },
  { title: "Refunds", url: "#", icon: (<RotateCcwIcon />) },
  { title: "Reviews", url: "#", icon: (<StarIcon />) },
  { title: "Settings", url: "#", icon: (<Settings2Icon />) },
], 
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              <Image
               src="/azina-logo.png"
               alt="Azina Health"
               width={140}
               height={32}
               className="h-8 w-auto"
              />

            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
