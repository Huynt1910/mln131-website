"use client";

import { useState } from "react";

import {
  scenarioLabels,
  scenarios,
  type ScenarioType,
} from "@/src/data/scenarios";

export type AnswerRecord = {
  scenarioId: number;
  selected: ScenarioType;
  correct: boolean;
};

type ResultScreenProps = {
  answers: AnswerRecord[];
  onRestart: () => void;
};

function getReview(score: number) {
  if (score >= 18) return "Nhà phân tích lý trí";
  if (score >= 14) return "Bạn hiểu khá tốt";
  if (score >= 10) return "Cần phân biệt kỹ hơn";
  return "Bạn nên xem lại kiến thức nền";
}

export default function ResultScreen({ answers, onRestart }: ResultScreenProps) {
  const [showAnswers, setShowAnswers] = useState(false);
  const score = answers.filter((answer) => answer.correct).length;
  const percent = Math.round((score / scenarios.length) * 100);
  const wrongSuperstition = answers.filter((answer) => {
    const scenario = scenarios.find((item) => item.id === answer.scenarioId);
    return scenario?.answer === "superstition" && !answer.correct;
  }).length;

  const wrongCounts = scenarios.reduce<Record<ScenarioType, number>>(
    (acc, scenario) => {
      const answer = answers.find((item) => item.scenarioId === scenario.id);
      if (answer && !answer.correct) acc[scenario.answer] += 1;
      return acc;
    },
    { religion: 0, belief: 0, superstition: 0 },
  );
  const mostMissed = Object.entries(wrongCounts).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="animate-fade-in rounded-[2rem] border border-white/60 bg-white p-5 shadow-2xl shadow-indigo-950/10 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-[1.5rem] bg-indigo-950 p-6 text-white">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-200">
            Tổng kết
          </p>
          <p className="mt-5 text-6xl font-black">
            {score}/{scenarios.length}
          </p>
          <p className="mt-3 text-2xl font-black">{getReview(score)}</p>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-amber-300"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="mt-3 text-sm font-bold text-indigo-100">
            Tỷ lệ đúng: {percent}%
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
            <p className="text-sm font-bold text-slate-500">Tổng số câu đúng</p>
            <p className="mt-2 text-3xl font-black text-indigo-950">{score}</p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
            <p className="text-sm font-bold text-slate-500">Nhóm dễ nhầm nhất</p>
            <p className="mt-2 text-2xl font-black text-indigo-950">
              {Number(mostMissed[1]) === 0
                ? "Không có"
                : scenarioLabels[mostMissed[0] as ScenarioType]}
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
            <p className="text-sm font-bold text-slate-500">Sai về mê tín</p>
            <p className="mt-2 text-3xl font-black text-indigo-950">
              {wrongSuperstition}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onRestart}
          className="rounded-full bg-indigo-950 px-6 py-3 text-sm font-black text-white transition hover:bg-indigo-800"
        >
          Chơi lại
        </button>
        <button
          type="button"
          onClick={() => setShowAnswers((value) => !value)}
          className="rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-black text-indigo-950 transition hover:bg-indigo-50"
        >
          {showAnswers ? "Ẩn đáp án" : "Xem đáp án"}
        </button>
      </div>
      {showAnswers ? (
        <div className="mt-6 grid gap-3">
          {scenarios.map((scenario) => {
            const answer = answers.find((item) => item.scenarioId === scenario.id);
            return (
              <div
                key={scenario.id}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-4"
              >
                <p className="font-black text-indigo-950">
                  {scenario.id}. {scenario.description}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đáp án:{" "}
                  <span className="font-black text-indigo-900">
                    {scenarioLabels[scenario.answer]}
                  </span>
                  {answer ? ` - Bạn chọn: ${scenarioLabels[answer.selected]}` : ""}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {scenario.explanation}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
