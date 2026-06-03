"use client";

import Image from "next/image";

import {
  getScenarioImage,
  scenarioLabels,
  scenarioTone,
  type Scenario,
  type ScenarioType,
} from "@/src/data/scenarios";

const options: ScenarioType[] = ["religion", "belief", "superstition"];

type QuestionCardProps = {
  scenario: Scenario;
  selected: ScenarioType | null;
  onSelect: (answer: ScenarioType) => void;
};

export default function QuestionCard({
  onSelect,
  scenario,
  selected,
}: QuestionCardProps) {
  const hasAnswered = selected !== null;
  const imageSrc = getScenarioImage(scenario);

  return (
    <article className="animate-fade-in overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl shadow-indigo-950/10">
      <div className="grid gap-0 lg:grid-cols-[minmax(300px,0.9fr)_1.1fr]">
        <div className="bg-indigo-950 p-4 sm:p-5">
          <div className="relative mx-auto aspect-[9/16] max-h-[72vh] w-full max-w-[420px] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-xl shadow-black/20">
            <Image
              src={imageSrc}
              alt={`Minh họa ${scenario.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
                Tình huống
              </p>
              <h2 className="mt-3 text-3xl font-black text-indigo-950">
                {scenario.title}
              </h2>
            </div>
          </div>

          <p className="mt-6 rounded-3xl bg-slate-50 p-5 text-xl font-semibold leading-9 text-slate-800">
            {scenario.description}
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {options.map((option) => {
              const tone = scenarioTone[option];
              const isCorrect = option === scenario.answer;
              const isSelected = option === selected;
              const stateClass =
                hasAnswered && isCorrect
                  ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                  : hasAnswered && isSelected
                    ? "border-red-500 bg-red-50 text-red-800"
                    : `${tone.border} ${tone.bg} ${tone.text} hover:-translate-y-0.5 hover:shadow-md`;

              return (
                <button
                  key={option}
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => onSelect(option)}
                  className={`min-h-24 rounded-3xl border px-5 py-4 text-left font-black transition ${stateClass} disabled:cursor-default`}
                >
                  <span className="block text-xs uppercase tracking-[0.18em] opacity-70">
                    Đáp án
                  </span>
                  <span className="mt-2 block text-lg">
                    {scenarioLabels[option]}
                  </span>
                </button>
              );
            })}
          </div>

          {hasAnswered ? (
            <div
              className={`mt-6 rounded-3xl border p-5 ${
                selected === scenario.answer
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-red-200 bg-red-50 text-red-900"
              }`}
            >
              <p className="font-black">
                {selected === scenario.answer
                  ? "Chính xác"
                  : `Chưa đúng. Đáp án là ${scenarioLabels[scenario.answer]}`}
              </p>
              <p className="mt-2 leading-7">{scenario.explanation}</p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
