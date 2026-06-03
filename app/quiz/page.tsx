import QuizGame from "@/src/components/quiz/QuizGame";
import { scenarios } from "@/src/data/scenarios";

export const dynamic = "force-dynamic";

function shuffleScenarios() {
  return [...scenarios]
    .map((scenario) => ({ scenario, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ scenario }) => scenario);
}

export default function QuizPage() {
  return (
    <div className="bg-[linear-gradient(135deg,#eef2ff,#ffffff_46%,#fef3c7)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
            Trò chơi phân loại
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
            Chọn đúng nhóm cho từng tình huống
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Sau mỗi lựa chọn, bạn sẽ thấy đúng/sai và giải thích. Kết quả cuối
            cùng được lưu để xem tại trang tổng kết.
          </p>
        </div>
        <QuizGame initialScenarios={shuffleScenarios()} />
      </div>
    </div>
  );
}
