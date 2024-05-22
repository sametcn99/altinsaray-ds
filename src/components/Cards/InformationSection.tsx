import { cn } from "@/lib/utils";
import React from "react";

export default function InformationSection({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "my-24 flex w-full flex-row flex-wrap justify-center gap-6 rounded-2xl bg-text-600 bg-opacity-70 px-6 py-12 text-text-200 shadow-xl ",
        className,
      )}
    >
      {children}
    </section>
  );
}
