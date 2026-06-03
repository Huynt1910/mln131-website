"use client";

import {
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

  return (
    <article className="animate-fade-in rounded-[2rem] border border-white/60 bg-white p-5 shadow-2xl shadow-indigo-950/10 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
            Thẻ tình huống
          </p>
          <h3 className="mt-3 text-3xl font-black text-indigo-950">
            {scenario.title}
          </h3>
        </div>
        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-black text-amber-800">
          #{scenario.id}
        </span>
      </div>
      <p className="mt-6 rounded-3xl bg-slate-50 p-5 text-xl font-semibold leading-9 text-slate-800">
        {scenario.description}
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {options.map((option) => {
          const isCorrect = option === scenario.answer;
          const isSelected = option === selected;
          const tone = scenarioTone[option];
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
                Chọn
              </span>
              <span className="mt-2 block text-lg">{scenarioLabels[option]}</span>
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
    </article>
  );
}
