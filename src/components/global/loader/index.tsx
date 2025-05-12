import { cn } from "@/lib/utils";
import { stat } from "fs";
import { Loader } from "lucide-react";
import React from "react";

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

const Spinner = ({ children, state, color, className }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Loader color={color} />
    </div>
  ) : (
    children
  );
};

export default Spinner;
