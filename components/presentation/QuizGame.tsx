"use client";

import { useMemo, useState } from "react";

import QuestionCard from "@/components/presentation/QuestionCard";
import ResultScreen, {
  type AnswerRecord,
} from "@/components/presentation/ResultScreen";
import { scenarios, type ScenarioType } from "@/src/data/scenarios";

export default function QuizGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<ScenarioType | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentScenario = scenarios[currentIndex];
  const score = useMemo(
    () => answers.filter((answer) => answer.correct).length,
    [answers],
  );
  const progress = Math.round(((currentIndex + 1) / scenarios.length) * 100);

  function handleSelect(answer: ScenarioType) {
    if (selected) return;

    setSelected(answer);
    setAnswers((items) => [
      ...items,
      {
        scenarioId: currentScenario.id,
        selected: answer,
        correct: answer === currentScenario.answer,
      },
    ]);
  }

  function handleNext() {
    if (!selected) return;

    if (currentIndex === scenarios.length - 1) {
      setIsCompleted(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelected(null);
  }

  function handleReset() {
    setCurrentIndex(0);
    setSelected(null);
    setAnswers([]);
    setIsCompleted(false);
  }

  return (
    <section id="game" className="bg-[linear-gradient(135deg,#eef2ff,#ffffff_46%,#fef3c7)] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
              Trò chơi tương tác
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-indigo-950">
              Bộ thẻ phân loại tình huống
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Chọn một trong ba nhóm. Sau mỗi câu, hệ thống sẽ giải thích vì sao
              tình huống thuộc tôn giáo, tín ngưỡng hoặc mê tín dị đoan.
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-indigo-200 bg-white px-5 py-3 text-sm font-black text-indigo-950 shadow-sm transition hover:bg-indigo-50"
          >
            Reset
          </button>
        </div>

        {isCompleted ? (
          <ResultScreen answers={answers} onRestart={handleReset} />
        ) : (
          <>
            <div className="mb-5 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-black text-indigo-950">
                  Câu {currentIndex + 1}/{scenarios.length}
                </p>
                <p className="font-black text-indigo-950">Điểm hiện tại: {score}</p>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-600 to-amber-300 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <QuestionCard
              key={currentScenario.id}
              scenario={currentScenario}
              selected={selected}
              onSelect={handleSelect}
            />
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                disabled={!selected}
                onClick={handleNext}
                className="rounded-full bg-indigo-950 px-7 py-3 text-sm font-black text-white shadow-lg shadow-indigo-900/20 transition hover:bg-indigo-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                {currentIndex === scenarios.length - 1
                  ? "Hoàn thành"
                  : "Câu tiếp theo"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
