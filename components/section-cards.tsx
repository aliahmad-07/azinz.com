"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  CalendarIcon,
  ClipboardListIcon,
  WalletIcon,
  RotateCcwIcon,
} from "lucide-react";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Appointments</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +50
          </CardTitle>
          <CardAction>
            <CalendarIcon className="size-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <p className="px-6 text-sm text-muted-foreground -mt-2">
          +20.1% from last month
        </p>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Prescriptions</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +50
          </CardTitle>
          <CardAction>
            <ClipboardListIcon className="size-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <p className="px-6 text-sm text-muted-foreground -mt-2">
          +20.1% from last month
        </p>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Payments</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +50
          </CardTitle>
          <CardAction>
            <WalletIcon className="size-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <p className="px-6 text-sm text-muted-foreground -mt-2">
          +20.1% from last month
        </p>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Refunds</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            +50
          </CardTitle>
          <CardAction>
            <RotateCcwIcon className="size-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <p className="px-6 text-sm text-muted-foreground -mt-2">
          +20.1% from last month
        </p>
      </Card>
    </div>
  );
}
