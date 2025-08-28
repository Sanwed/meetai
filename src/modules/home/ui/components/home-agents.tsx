"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/data-table";
import { columns } from "@/modules/agents/ui/components/columns";
import { useRouter } from "next/navigation";

export const HomeAgents = () => {
  const router = useRouter();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions({}));

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">My agents</h2>
        <Link href="/agents" className="flex items-center gap-2">
          All agents
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
      <DataTable
        data={data.items.slice(0, 3)}
        columns={columns}
        onRowClick={(row) => router.push(`/agents/${row.id}`)}
      />
    </div>
  );
};

export const HomeAgentsLoading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds"
    />
  );
};

export const HomeAgentsError = () => {
  return (
    <ErrorState
      title="Error Loading Agents"
      description="Something went wrong"
    />
  );
};
