import React from "react";
import Image from "next/image";
import { features } from "@/lib/features";
import InformationSection from "@/components/Cards/InformationSection";

export default function WhyChooseUs() {
  return (
    <InformationSection>
      <h2 className="text-center text-4xl font-bold">
        Bizi Neden Tercih Etmelisiniz?
      </h2>
      <div className="grid grid-cols-1 grid-rows-3 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="col-start-2 row-start-2  hidden items-center justify-center md:flex">
          <div className="flex h-full w-full items-center justify-center">
            <Image
              alt="Romantic Getaway"
              src={"/undraw_romantic_getaway_re_3f45.svg"}
              width={300}
              height={300}
              className="pointer-events-none select-none rounded-full  border-8 border-solid border-white"
            />
          </div>
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex w-full flex-col items-center justify-center rounded-xl bg-white p-2 text-center shadow-lg md:h-48 md:w-44 ${
              index === 0
                ? "self-end justify-self-end"
                : index === 1
                  ? "self-end justify-self-center"
                  : index === 2
                    ? "self-end justify-self-start"
                    : index === 3
                      ? "self-center justify-self-end"
                      : index === 4
                        ? "self-center justify-self-start"
                        : index === 5
                          ? "self-start justify-self-end"
                          : index === 6
                            ? "self-start justify-self-center"
                            : "self-start justify-self-start"
            }`}
          >
            <h3 className="inline-flex flex-col items-center gap-1 font-bold">
              {feature.icon}
              {feature.name}
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </InformationSection>
  );
}
