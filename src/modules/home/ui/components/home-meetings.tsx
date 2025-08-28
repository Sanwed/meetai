"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/data-table";
import { columns } from "@/modules/meetings/ui/components/columns";
import { useRouter } from "next/navigation";

export const HomeMeetings = () => {
  const router = useRouter();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">My meetings</h2>
        <Link href="/meetings" className="flex items-center gap-2">
          All meetings
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
      <DataTable
        data={data.items.slice(0, 3)}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
    </div>
  );
};

export const HomeMeetingsLoading = () => {
  return (
    <LoadingState
      title="Loading Meetings"
      description="This may take a few seconds"
    />
  );
};

export const HomeMeetingsError = () => {
  return (
    <ErrorState
      title="Error Loading Meetings"
      description="Something went wrong"
    />
  );
};
