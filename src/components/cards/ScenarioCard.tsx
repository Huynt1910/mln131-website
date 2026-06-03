"use client";

import Image from "next/image";
import { useState } from "react";

import {
  getScenarioImage,
  scenarioLabels,
  scenarioTone,
  type Scenario,
} from "@/src/data/scenarios";

type ScenarioCardProps = {
  scenario: Scenario;
};

export default function ScenarioCard({ scenario }: ScenarioCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const tone = scenarioTone[scenario.answer];
  const imageSrc = getScenarioImage(scenario);

  return (
    <article className="group aspect-[9/16] [perspective:1200px]">
      <button
        type="button"
        aria-pressed={isFlipped}
        onClick={() => setIsFlipped((value) => !value)}
        className="h-full w-full rounded-[2rem] text-left outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-sky-300"
      >
        <div
          className="relative h-full w-full transition-transform duration-500"
          style={{
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm group-hover:shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={imageSrc}
              alt={`Minh họa ${scenario.title}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div
            className="absolute inset-0 overflow-hidden rounded-[2rem] border border-indigo-200 bg-white shadow-xl shadow-indigo-950/10"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className={`h-2 ${tone.accent}`} />
            <div className="flex h-[calc(100%-0.5rem)] flex-col p-6">
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
                  Kết quả
                </p>
                <h2 className="mt-4 text-4xl font-black text-indigo-950">
                  {scenarioLabels[scenario.answer]}
                </h2>
                <p className="mt-6 max-w-sm text-base font-semibold leading-8 text-slate-600">
                  {scenario.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}
