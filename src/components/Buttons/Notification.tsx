"use client";
import useAlert from "@/hooks/useAlert";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";

export default function Notification() {
  const showComponent = useAlert(3000); // 10 seconds

  return (
    <>
      {showComponent && (
        <div className="fixed bottom-20 right-4 -scale-x-100 transform">
          <BiMessageRoundedDots size={50} />
        </div>
      )}
    </>
  );
}
