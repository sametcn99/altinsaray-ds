import React from "react";

export default function InformationCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex max-w-96 flex-col gap-4">{children}</div>;
}
