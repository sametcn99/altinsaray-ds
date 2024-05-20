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
        "button flex w-fit flex-row items-center gap-2 rounded-xl p-2 font-semibold ",
        className,
      )}
    >
      {children}
    </div>
  );
}
