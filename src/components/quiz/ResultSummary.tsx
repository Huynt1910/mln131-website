"use client";

import Link from "next/link";

import {
  scenarioLabels,
  scenarios,
  type ScenarioType,
} from "@/src/data/scenarios";

export type QuizAnswer = {
  scenarioId: number;
  selected: ScenarioType;
  correct: boolean;
};

export type QuizResult = {
  score: number;
  total: number;
  answers: QuizAnswer[];
  finishedAt: string;
};

type ResultSummaryProps = {
  result: QuizResult | null;
};

function getReview(score: number, total: number) {
  const normalized = Math.round((score / total) * 20);
  if (normalized >= 18) return "Nhà phân tích lý trí";
  if (normalized >= 14) return "Bạn hiểu khá tốt";
  if (normalized >= 10) return "Cần phân biệt kỹ hơn";
  return "Bạn nên xem lại kiến thức nền";
}

export default function ResultSummary({ result }: ResultSummaryProps) {
  if (!result) {
    return (
      <div className="rounded-[2rem] border border-indigo-100 bg-white p-8 text-center shadow-xl shadow-indigo-950/10">
        <h1 className="text-3xl font-black text-indigo-950">
          Chưa có kết quả quiz
        </h1>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
          Hãy làm quiz phân loại để hệ thống lưu điểm, nhận xét và nhóm dễ nhầm.
        </p>
        <Link
          href="/quiz"
          className="mt-6 inline-flex rounded-full bg-indigo-950 px-6 py-3 text-sm font-black text-white transition hover:bg-indigo-800"
        >
          Làm quiz ngay
        </Link>
      </div>
    );
  }

  const percent = Math.round((result.score / result.total) * 100);
  const wrongSuperstition = result.answers.filter((answer) => {
    const scenario = scenarios.find((item) => item.id === answer.scenarioId);
    return scenario?.answer === "superstition" && !answer.correct;
  }).length;
  const wrongCounts = scenarios.reduce<Record<ScenarioType, number>>(
    (acc, scenario) => {
      const answer = result.answers.find((item) => item.scenarioId === scenario.id);
      if (answer && !answer.correct) acc[scenario.answer] += 1;
      return acc;
    },
    { religion: 0, belief: 0, superstition: 0 },
  );
  const mostMissed = Object.entries(wrongCounts).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="rounded-[2rem] border border-indigo-100 bg-white p-5 shadow-xl shadow-indigo-950/10 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-[1.5rem] bg-indigo-950 p-6 text-white">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-200">
            Kết quả quiz
          </p>
          <p className="mt-5 text-6xl font-black">
            {result.score}/{result.total}
          </p>
          <p className="mt-3 text-2xl font-black">
            {getReview(result.score, result.total)}
          </p>
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
            <p className="text-sm font-bold text-slate-500">Tổng câu đúng</p>
            <p className="mt-2 text-3xl font-black text-indigo-950">
              {result.score}
            </p>
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

      <div className="mt-8 rounded-3xl bg-amber-50 p-5 text-amber-950">
        <p className="text-xl font-black">
          Giữ gìn tín ngưỡng tốt đẹp - Tôn trọng tự do tôn giáo - Bài trừ mê tín dị đoan.
        </p>
        <p className="mt-3 leading-7">
          Tín ngưỡng và tôn giáo là nhu cầu tinh thần chính đáng khi được thực
          hiện phù hợp với văn hóa và pháp luật. Cần tỉnh táo trước hành vi mê
          tín dị đoan, lợi dụng niềm tin để trục lợi hoặc gây hại.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/quiz"
          className="rounded-full bg-indigo-950 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-indigo-800"
        >
          Chơi lại
        </Link>
        <Link
          href="/learn"
          className="rounded-full border border-indigo-200 bg-white px-6 py-3 text-center text-sm font-black text-indigo-950 transition hover:bg-indigo-50"
        >
          Quay về học lý thuyết
        </Link>
      </div>
    </div>
  );
}
