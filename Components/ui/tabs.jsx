import React, { useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

const TabsContext = createContext();

export function Tabs({ defaultValue, className, children }) {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, children }) {
  return (
    <div className={cn("flex border-b border-slate-200", className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className, children }) {
  const { active, setActive } = useContext(TabsContext);
  const isActive = active === value;

  return (
    <button
      onClick={() => setActive(value)}
      className={cn(
        "flex-1 py-2 text-sm font-medium border-b-2 transition-colors",
        isActive
          ? "border-slate-900 text-slate-900"
          : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className, children }) {
  const { active } = useContext(TabsContext);
  if (active !== value) return null;

  return <div className={cn("mt-4", className)}>{children}</div>;
}
