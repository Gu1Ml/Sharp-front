import React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-10 h-10 rounded-full object-cover", className)}
    />
  );
}
