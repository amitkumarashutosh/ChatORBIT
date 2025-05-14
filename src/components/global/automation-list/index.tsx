"use client";

import { usePaths } from "@/hooks/user-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";

const AutomationList = () => {
  const { pathname } = usePaths();
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/12123`}
        className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border border-[#545454] flex gap-5"
      >
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="text-xl font-semibold text-white">Automation Name</h2>
          <p className="text-[#9B9CA0] text-sm font-light">
            This is from the comment. This is a longer text to test dynamic
            height behavior. It should not break the button positioning.
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize text-sm",
                (0 + 1) % 1 == 0 &&
                  "bg-green-500/15 border-2 border-green-500 text-green-500",
                (1 + 1) % 1 == 0 &&
                  "bg-purple-500/15 border-2 border-purple-500 text-purple-500",
                (2 + 1) % 1 == 0 &&
                  "bg-yellow-500/15 border-2 border-yellow-500 text-yellow-500",
                (3 + 1) % 1 == 0 &&
                  "bg-red-500/15 border-2 border-red-500 text-white"
              )}
            >
              Get Started
            </div>
          </div>

          <div className="rounded-full border-2 border-dashed border-white/60 px-3 py-1 w-fit mt-2">
            <p className="text-sm text-[#bfc0c3]">No Keywords</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end self-stretch">
          <p className="capitalize text-xs font-light text-[#9B9CA0]">
            June 5th 2025
          </p>

          <GradientButton
            type="BUTTON"
            className="bg-background text-white hover:opacity-80 hover:text-black text-sm px-5 py-2"
          >
            SmartAI
          </GradientButton>
          <Button className="bg-background text-white hover:opacity-80">
            Standard
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default AutomationList;
