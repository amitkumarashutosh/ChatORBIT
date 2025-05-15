"use client";

import { Button } from "@/components/ui/button";
import Spinner from "../loader";
import { AudioWaveform } from "lucide-react";
import { useCreateAutomation } from "@/hooks/use-automations";
import { v4 } from "uuid";
import { useMemo } from "react";

const CreateAutomation = () => {
  const mutationId = useMemo(() => v4(), []);
  const { mutate, isPending } = useCreateAutomation(mutationId);

  return (
    <Button
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full
        from-[#3352CC] font-medium to-[#1C2D70]"
      onClick={() =>
        mutate({
          name: "Untitled",
          id: mutationId,
          createdAt: new Date(),
          keywords: [],
        })
      }
    >
      <Spinner state={isPending}>
        <AudioWaveform />
        <p className="lg:inline hidden">Create Automation</p>
      </Spinner>
    </Button>
  );
};
export default CreateAutomation;
