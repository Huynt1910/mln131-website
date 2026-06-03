import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="font-black text-indigo-950">
            Tín ngưỡng hay mê tín? Bộ thẻ phân loại tình huống
          </p>
          <p className="mt-2 max-w-2xl leading-6">
            Website thuyết trình tương tác giúp phân biệt tôn giáo, tín ngưỡng
            và mê tín dị đoan bằng kiến thức ngắn gọn, bộ thẻ luyện tập và quiz.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <Link className="font-bold text-indigo-900 hover:text-sky-600" href="/learn">
            Học lý thuyết
          </Link>
          <Link className="font-bold text-indigo-900 hover:text-sky-600" href="/cards">
            Luyện thẻ
          </Link>
          <Link className="font-bold text-indigo-900 hover:text-sky-600" href="/quiz">
            Làm quiz
          </Link>
        </div>
      </div>
    </footer>
  );
}
