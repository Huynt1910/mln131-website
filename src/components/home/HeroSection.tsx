import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,#fde68a_0,#dbeafe_30%,#ffffff_68%)] p-6 shadow-2xl shadow-indigo-950/10 sm:p-10 lg:p-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-indigo-200 bg-white/85 px-4 py-2 text-sm font-black text-indigo-950">
            Chủ nghĩa xã hội khoa học
          </span>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-indigo-950 sm:text-6xl">
            Tín ngưỡng hay mê tín?
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-slate-700">
            Bộ thẻ phân loại tình huống giúp bạn nhận diện đúng các hiện tượng
            tâm linh trong đời sống.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Đi qua một lộ trình rõ ràng: học kiến thức nền, so sánh ba khái
            niệm, lật thẻ tình huống, làm quiz và xem tổng kết.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center rounded-full bg-indigo-950 px-6 py-3 text-sm font-black text-white shadow-lg shadow-indigo-950/20 transition hover:-translate-y-0.5 hover:bg-indigo-800"
            >
              Học kiến thức nền
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-black text-indigo-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Bắt đầu phân loại
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] bg-indigo-950 p-6 text-white shadow-xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-200">
            Luồng thuyết trình
          </p>
          <div className="mt-6 grid gap-3">
            {["Học kiến thức", "So sánh", "Lật thẻ luyện tập", "Quiz phân loại", "Tổng kết thông điệp"].map(
              (step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-black text-indigo-950">
                    {index + 1}
                  </span>
                  <span className="font-bold">{step}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
