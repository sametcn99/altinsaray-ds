import { features } from "@/lib/features";
import React from "react";

export default function GridFeatures() {
  return (
    <div className="w-full rounded-t-3xl bg-slate-300 bg-opacity-20 px-32 py-14 backdrop-blur-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature) => (
          <div className="gradient flex min-h-28 flex-col items-center justify-center gap-2 rounded-b-xl rounded-t-3xl p-6">
            <div className="icon mb-7">{feature.icon}</div>
            <h3 className="text-2xl font-bold">{feature.name}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
