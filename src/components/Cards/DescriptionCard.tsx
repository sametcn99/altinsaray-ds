import React from "react";

export default function DescriptionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="min-w-32 max-w-96">{children}</div>
    </div>
  );
}
