import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export function Dialog({ children, open: controlledOpen, onOpenChange }) {
  const [open, setOpen] = useState(controlledOpen || false);

  useEffect(() => setOpen(controlledOpen), [controlledOpen]);

  const handleChange = (value) => {
    setOpen(value);
    if (onOpenChange) onOpenChange(value);
  };

  return (
    <DialogContext.Provider value={{ open, setOpen: handleChange }}>
      {children}
    </DialogContext.Provider>
  );
}

const DialogContext = React.createContext({ open: false, setOpen: () => {} });

export function DialogTrigger({ asChild, children }) {
  const { setOpen } = React.useContext(DialogContext);

  return React.cloneElement(children, {
    onClick: () => setOpen(true),
  });
}

export function DialogContent({ children, className }) {
  const { open, setOpen } = React.useContext(DialogContext);
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div
        className={cn(
          "bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 max-w-lg w-full",
          className
        )}
      >
        <button
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export function DialogHeader({ className, children }) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function DialogTitle({ className, children }) {
  return (
    <h2
      className={cn(
        "text-lg font-semibold text-slate-900 dark:text-slate-100",
        className
      )}
    >
      {children}
    </h2>
  );
}
