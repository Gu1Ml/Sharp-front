import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Select({ value, onValueChange, children, className }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, setOpen, value, onValueChange })
      )}
    </div>
  );
}

export function SelectTrigger({ open, setOpen, children, className }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-md px-3 py-2 text-left text-sm flex justify-between items-center",
        className
      )}
    >
      {children}
      <span className="ml-2 text-slate-500">▾</span>
    </button>
  );
}

export function SelectValue({ value, placeholder }) {
  return (
    <span className="truncate">
      {value ? value : <span className="text-slate-400">{placeholder}</span>}
    </span>
  );
}

export function SelectContent({ open, children }) {
  if (!open) return null;
  return (
    <div className="absolute z-50 mt-1 w-full rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-lg">
      {children}
    </div>
  );
}

export function SelectItem({ children, value, onValueChange, setOpen }) {
  return (
    <div
      className="cursor-pointer px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm"
      onClick={() => {
        onValueChange?.(value);
        setOpen(false);
      }}
    >
      {children}
    </div>
  );
}
