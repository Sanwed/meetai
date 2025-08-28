import { ChevronDown } from "lucide-react";

export const DashboardUserButtonSkeleton = () => {
  return (
    <div className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between gap-x-2 bg-white/5 hover:bg-white/10 overflow-hidden">
      <div className="size-8 rounded-full bg-sidebar-accent" />
      <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
        <div className="h-5 w-full rounded-lg bg-sidebar-accent" />
        <div className="h-4 w-full rounded-lg bg-sidebar-accent" />
      </div>
      <ChevronDown className="size-4 text-sidebar-accent" />
    </div>
  );
};
