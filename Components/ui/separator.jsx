import React from "react";
import { cn } from "@/lib/utils";

export function Separator({ className }) {
  return <hr className={cn("border-t border-slate-200", className)} />;
}
