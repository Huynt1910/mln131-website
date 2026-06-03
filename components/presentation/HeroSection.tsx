import ConceptCards from "@/components/presentation/ConceptCards";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#fde68a_0,#dbeafe_28%,#f8fafc_62%)]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-bold text-indigo-900 shadow-sm">
            Bộ thẻ phân loại tình huống
          </span>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-indigo-950 sm:text-6xl lg:text-7xl">
            Tín ngưỡng hay mê tín?
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-slate-700">
            Bộ thẻ phân loại tình huống giúp bạn nhận diện đúng các hiện tượng
            tâm linh trong đời sống.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Website này giúp người học phân biệt tôn giáo, tín ngưỡng và mê tín
            dị đoan thông qua lý thuyết ngắn gọn, bảng so sánh và trò chơi phân
            loại tình huống.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#game"
              className="inline-flex items-center justify-center rounded-full bg-indigo-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-900/20 transition hover:-translate-y-0.5 hover:bg-indigo-800"
            >
              Bắt đầu phân loại
            </a>
            <a
              href="#theory"
              className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-bold text-indigo-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Xem kiến thức nền
            </a>
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-2xl shadow-indigo-950/10 backdrop-blur">
            <div className="rounded-[1.5rem] bg-indigo-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
                Câu hỏi trung tâm
              </p>
              <p className="mt-4 text-2xl font-black leading-9">
                Một hành vi tâm linh là giá trị văn hóa, sinh hoạt tôn giáo hay
                biểu hiện mê tín?
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-bold">
                <span className="rounded-2xl bg-white/10 px-3 py-3">Đức tin</span>
                <span className="rounded-2xl bg-white/10 px-3 py-3">
                  Văn hóa
                </span>
                <span className="rounded-2xl bg-amber-300 px-3 py-3 text-indigo-950">
                  Lý trí
                </span>
              </div>
            </div>
          </div>
          <ConceptCards />
        </div>
      </div>
    </section>
  );
}
