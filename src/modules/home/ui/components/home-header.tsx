"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/clients";
import { NewAgentDialog } from "@/modules/agents/ui/components/new-agent-dialog";
import { NewMeetingDialog } from "@/modules/meetings/ui/components/new-meeting-dialog";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export const HomeHeader = () => {
  const { data } = authClient.useSession();
  const [isNewAgentDialogOpen, setIsNewAgentDialogOpen] = useState(false);
  const [isNewMeetingDialogOpen, setIsNewMeetingDialogOpen] = useState(false);

  return (
    <>
      <NewAgentDialog open={isNewAgentDialogOpen} onOpenChange={setIsNewAgentDialogOpen} />
      <NewMeetingDialog open={isNewMeetingDialogOpen} onOpenChange={setIsNewMeetingDialogOpen} />
      <div className="flex flex-col gap-y-4">
        <h1 className="font-medium text-xl">Welcome back, {data?.user.name}</h1>
        <div className="flex flex-col gap-4 md:flex-row items-center">
          <Button type="button" onClick={() => setIsNewAgentDialogOpen(true)}>
            <PlusIcon className="size-5" />
            Add new agent
          </Button>
          <Button type="button" onClick={() => setIsNewMeetingDialogOpen(true)}>
            <PlusIcon className="size-5" />
            Add new meeting
          </Button>
        </div>
      </div>
    </>
  );
};
