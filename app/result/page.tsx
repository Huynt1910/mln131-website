"use client";

import { useState } from "react";

import ResultSummary, {
  type QuizResult,
} from "@/src/components/quiz/ResultSummary";
import { quizResultStorageKey } from "@/src/components/quiz/QuizGame";

export default function ResultPage() {
  const [result] = useState<QuizResult | null>(() => {
    if (typeof window === "undefined") return null;

    const raw = window.localStorage.getItem(quizResultStorageKey);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as QuizResult;
    } catch {
      window.localStorage.removeItem(quizResultStorageKey);
      return null;
    }
  });

  return (
    <div className="bg-[linear-gradient(135deg,#f8fafc,#eef2ff_50%,#fffbeb)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ResultSummary result={result} />
      </div>
    </div>
  );
}
