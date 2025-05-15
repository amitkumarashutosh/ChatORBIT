"use client";

import { ChevronRight, PencilIcon } from "lucide-react";
import ActivateAutomationButton from "../../active-automation-button";
import { useQueryAutomationInfo } from "@/hooks/use-query";
import { useEditAutomation } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { Input } from "@/components/ui/input";

type Props = {
  id: string;
};

const AutomaticBreadCrumb = ({ id }: Props) => {
  const { data } = useQueryAutomationInfo(id);
  const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id);

  const { latestVariable } = useMutationDataState(["update-automation"]);
  return (
    <div className="rounded-full w-full p-5 bg-black/10 flex items-center justify-between">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-muted-foreground truncate">Automations</p>
        <ChevronRight className="text-muted-foreground flex-shrink-0 w-4 h-4" />
        <span className="flex gap-x-2 items-center min-w-0">
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                isPending ? latestVariable.variables : "Add a new name"
              }
              className="bg-transparent h-auto outline-none text-base border-none p-0 focus-visible:ring-0"
            />
          ) : (
            <p className="text-muted-foreground truncate">
              {latestVariable?.variables
                ? latestVariable.variables.name
                : data?.data?.name}
            </p>
          )}
          <span
            className="cursor-pointer hover:opacity-75 transition duration-100 flex-shrink-0 mx-2"
            onClick={() => enableEdit()}
          >
            {edit ? <></> : <PencilIcon size={14} />}
          </span>
        </span>
      </div>

      <div className="flex items-center gap-x-4 ml-auto">
        <p className="hidden md:block text-muted-foreground text-sm truncate min-w-0">
          All updates are automatically saved
        </p>
        <div className="flex items-center gap-x-4 flex-shrink-0">
          <p className="text-muted-foreground text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomaticBreadCrumb;
