import React from "react";
import { Button } from "../ui/button";
import { CheckIcon } from "../CheckIcon";

export default function PlanCard({
  tags,
  title,
  price,
  popular,
}: {
  tags: string[];
  title: string;
  price: number;
  popular?: boolean;
}) {
  return (
    <div className="relative flex flex-col justify-between rounded-lg border border-gray-200  bg-white p-6 shadow-lg">
      {popular && (
        <div className="absolute left-1/2 top-0 inline-block -translate-x-1/2 -translate-y-1/2 transform select-none rounded-full bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 px-3 py-1 text-sm text-white">
          Popüler
        </div>
      )}
      <div>
        <h3 className="text-center text-2xl font-bold">{title}</h3>
        <div className="mt-4 text-center text-zinc-600 ">
          <span className="text-4xl font-bold">{price}</span> ₺/ay
        </div>
        <ul className="mt-4 space-y-2">
          {tags.map((tag) => (
            <li className="flex items-center" key={tag}>
              <CheckIcon className="mr-2 rounded-full bg-accent-500 p-1 text-xs text-white" />
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button
          className={`w-full ${popular ? `gradient transition-all duration-700 hover:scale-105` : ``}`}
        >
          Başla
        </Button>
      </div>
    </div>
  );
}
