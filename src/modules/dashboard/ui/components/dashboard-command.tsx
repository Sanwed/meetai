import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  CommandResponsiveDialog,
  CommandInput,
  CommandItem,
  CommandList,
  CommandGroup,
  CommandEmpty,
} from "@/components/ui/command";
import { Dispatch, SetStateAction, useState } from "react";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { useTRPC } from "@/trpc/client";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const trpc = useTRPC();

  const { data: meetings, isPending: isMeetingsLoading } = useQuery(
    trpc.meetings.getMany.queryOptions({
      search,
      pageSize: 100,
    })
  );

  const { data: agents, isPending: isAgentsLoading } = useQuery(
    trpc.agents.getMany.queryOptions({
      search,
      pageSize: 100,
    })
  );

  return (
    <CommandResponsiveDialog
      shouldFilter={false}
      open={open}
      onOpenChange={setOpen}
    >
      <CommandInput
        placeholder="Find a meeting or agent..."
        value={search}
        onValueChange={(value) => setSearch(value)}
      />
      <CommandList>
        <CommandGroup heading="Meetings">
          {isMeetingsLoading ? (
            <div className="flex flex-col gap-y-2">
              <div className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 h-11 w-full outline-hidden select-none bg-accent/50">
                <span className="w-2/5 h-4 bg-accent" />
              </div>
              <div className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 h-11 w-full outline-hidden select-none bg-accent/50">
                <span className="w-2/5 h-4 bg-accent" />
              </div>
            </div>
          ) : (
            <CommandEmpty>
              <span className="text-muted-foreground text-sm">
                No meetings found
              </span>
            </CommandEmpty>
          )}
          {meetings?.items.map((meeting) => (
            <CommandItem
              onSelect={() => {
                router.push(`/meetings/${meeting.id}`);
                setOpen(false);
              }}
              key={meeting.id}
            >
              {meeting.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Agents">
          {isAgentsLoading ? (
            <div className="flex flex-col gap-y-2">
              <div className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 h-11 w-full outline-hidden select-none bg-accent/50">
                <span className="size-4 rounded-full bg-accent" />
                <span className="w-2/5 h-4 bg-accent" />
              </div>
              <div className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 h-11 w-full outline-hidden select-none bg-accent/50">
                <span className="size-4 rounded-full bg-accent" />
                <span className="w-2/5 h-4 bg-accent" />
              </div>
            </div>
          ) : (
            <CommandEmpty>
              <span className="text-muted-foreground text-sm">
                No meetings found
              </span>
            </CommandEmpty>
          )}
          {agents?.items.map((agent) => (
            <CommandItem
              onSelect={() => {
                router.push(`/agents/${agent.id}`);
                setOpen(false);
              }}
              key={agent.id}
            >
              <GeneratedAvatar
                seed={agent.name}
                variant="botttsNeutral"
                className="size-5"
              />
              {agent.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandResponsiveDialog>
  );
};
