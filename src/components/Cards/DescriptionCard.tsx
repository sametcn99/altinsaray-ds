import React from "react";

export default function DescriptionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="min-w-32 max-w-96">{description}</p>
    </div>
  );
}
