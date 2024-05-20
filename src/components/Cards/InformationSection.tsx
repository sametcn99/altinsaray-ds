import React from "react";

export default function InformationSection({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex w-full flex-row flex-wrap items-center justify-center gap-6 py-20"
      id={id}
    >
      <div className="flex w-full flex-row flex-wrap justify-center gap-6 rounded-2xl bg-text-600  bg-opacity-70 p-6 text-text-200 shadow-xl backdrop-blur-sm">
        {children}
      </div>
    </section>
  );
}
