"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import ScenarioCard from "@/src/components/cards/ScenarioCard";
import {
  scenarioLabels,
  scenarios,
  type ScenarioType,
} from "@/src/data/scenarios";

type FilterValue = "all" | ScenarioType;

const filters: { label: string; value: FilterValue }[] = [
  { label: "Tất cả", value: "all" },
  { label: "Tôn giáo", value: "religion" },
  { label: "Tín ngưỡng", value: "belief" },
  { label: "Mê tín dị đoan", value: "superstition" },
];

export default function CardsPage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const filteredScenarios = useMemo(
    () =>
      filter === "all"
        ? scenarios
        : scenarios.filter((scenario) => scenario.answer === filter),
    [filter],
  );

  return (
    <div className="bg-[linear-gradient(135deg,#f8fafc,#eef2ff_45%,#fffbeb)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
              Bộ thẻ tình huống
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
              Lật thẻ để luyện phân loại
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mặt trước là tình huống, mặt sau là đáp án và giải thích. Hãy thử
              dự đoán trước khi lật thẻ.
            </p>
          </div>
          <Link
            href="/quiz"
            className="rounded-full bg-indigo-950 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-indigo-800"
          >
            Làm quiz
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full px-4 py-2 text-sm font-black transition ${
                filter === item.value
                  ? "bg-indigo-950 text-white"
                  : "border border-indigo-200 bg-white text-indigo-950 hover:bg-indigo-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm font-bold text-slate-600">
          Đang hiển thị {filteredScenarios.length} thẻ
          {filter !== "all" ? ` thuộc nhóm ${scenarioLabels[filter]}` : ""}.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredScenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      </div>
    </div>
  );
}
