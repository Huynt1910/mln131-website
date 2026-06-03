import Link from "next/link";

import FeatureCards from "@/src/components/home/FeatureCards";
import HeroSection from "@/src/components/home/HeroSection";

export default function Home() {
  return (
    <div className="bg-[linear-gradient(135deg,#eef2ff,#ffffff_48%,#fef3c7)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <HeroSection />
        <FeatureCards />

        <section className="mt-8 grid gap-4 rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-sm lg:grid-cols-[1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Mục tiêu học tập
            </p>
            <h2 className="mt-3 text-3xl font-black text-indigo-950">
              Nhận diện đúng, tranh luận rõ, kết luận có cơ sở
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Website này biến phần thuyết trình thành một hoạt động có tương
              tác: người xem học khái niệm, luyện với tình huống đời sống, sau
              đó tự kiểm tra bằng quiz.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {["Tôn giáo không đồng nghĩa với mê tín", "Tín ngưỡng truyền thống có giá trị văn hóa", "Mê tín dị đoan có thể gây hại và bị lợi dụng"].map(
              (message) => (
                <div
                  key={message}
                  className="rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-6 text-slate-700"
                >
                  {message}
                </div>
              ),
            )}
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <Link
            href="/learn"
            className="rounded-full bg-indigo-950 px-7 py-3 text-sm font-black text-white shadow-lg shadow-indigo-950/20 transition hover:bg-indigo-800"
          >
            Bắt đầu lộ trình
          </Link>
        </div>
      </div>
    </div>
  );
}
