"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import QuestionCard from "@/src/components/quiz/QuestionCard";
import type { QuizAnswer, QuizResult } from "@/src/components/quiz/ResultSummary";
import { scenarios, type Scenario, type ScenarioType } from "@/src/data/scenarios";

const storageKey = "belief-quiz-result";

type QuizGameProps = {
  initialScenarios: Scenario[];
};

function shuffleScenarios(source: Scenario[]) {
  return [...source]
    .map((scenario) => ({ scenario, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ scenario }) => scenario);
}

export default function QuizGame({ initialScenarios }: QuizGameProps) {
  const router = useRouter();
  const [quizScenarios, setQuizScenarios] =
    useState<Scenario[]>(initialScenarios);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<ScenarioType | null>(null);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const currentScenario = quizScenarios[currentIndex] ?? scenarios[0];
  const score = useMemo(
    () => answers.filter((answer) => answer.correct).length,
    [answers],
  );
  const progress = Math.round(((currentIndex + 1) / quizScenarios.length) * 100);

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

  function finishQuiz(nextAnswers: QuizAnswer[]) {
    const result: QuizResult = {
      score: nextAnswers.filter((answer) => answer.correct).length,
      total: quizScenarios.length,
      answers: nextAnswers,
      finishedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(storageKey, JSON.stringify(result));
    router.push("/result");
  }

  function handleNext() {
    if (!selected) return;

    if (currentIndex === quizScenarios.length - 1) {
      finishQuiz(answers);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelected(null);
  }

  function handleReset() {
    setQuizScenarios(shuffleScenarios(scenarios));
    setCurrentIndex(0);
    setSelected(null);
    setAnswers([]);
    window.localStorage.removeItem(storageKey);
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-5 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black text-indigo-950">
            Câu {currentIndex + 1}/{quizScenarios.length}
          </p>
          <p className="font-black text-indigo-950">Điểm hiện tại: {score}</p>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-indigo-200 px-4 py-2 text-sm font-black text-indigo-950 transition hover:bg-indigo-50"
          >
            Xáo câu hỏi
          </button>
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
          {currentIndex === quizScenarios.length - 1
            ? "Xem kết quả"
            : "Câu tiếp theo"}
        </button>
      </div>
    </div>
  );
}

export { storageKey as quizResultStorageKey };
