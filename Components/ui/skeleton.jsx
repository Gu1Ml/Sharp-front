import React from "react";
import { cn } from "@/lib/utils";

/**
 * Componente Skeleton — usado para exibir placeholders durante o carregamento de dados.
 * Exemplo: <Skeleton className="h-6 w-40" />
 */
export function Skeleton({ className }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-200 dark:bg-slate-700",
        className
      )}
    />
  );
}
