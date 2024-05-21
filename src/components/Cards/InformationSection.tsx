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
      id={id}
      className="my-24 flex w-full flex-row flex-wrap justify-center gap-6 rounded-2xl bg-text-600 bg-opacity-70 p-6 text-text-200 shadow-xl backdrop-blur-sm"
    >
      {children}
    </section>
  );
}
