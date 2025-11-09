import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }) {
  return (
    <div className={cn("rounded-xl border border-slate-200 bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}
export function CardHeader({ className, children }) {
  return <div className={cn("p-4 border-b border-slate-100", className)}>{children}</div>;
}
export function CardContent({ className, children }) {
  return <div className={cn("p-4", className)}>{children}</div>;
}
export function CardFooter({ className, children }) {
  return <div className={cn("p-4 border-t border-slate-100", className)}>{children}</div>;
}
