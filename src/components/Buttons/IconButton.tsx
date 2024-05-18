import React from "react";
import { twMerge } from "tailwind-merge";

export default function IconButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex w-fit flex-row items-center gap-2 rounded-xl bg-background-200 p-2 font-semibold text-text-900",
        className,
      )}
    >
      {children}
    </div>
  );
}
