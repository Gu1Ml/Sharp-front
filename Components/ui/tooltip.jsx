import React from "react";

export function Tooltip({ text, children }) {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute z-10 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1">
        {text}
      </div>
    </div>
  );
}
