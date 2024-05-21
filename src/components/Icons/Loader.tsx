import { cn } from "@/lib/utils";
import React from "react";

export default function Loader({ className }: { className?: string }) {
  return <div className={cn(`spinner`, className)}></div>;
}
