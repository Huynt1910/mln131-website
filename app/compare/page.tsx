import Link from "next/link";

import ComparisonTable from "@/src/components/compare/ComparisonTable";

export default function ComparePage() {
  return (
    <div className="bg-indigo-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-200">
              Bảng so sánh
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Đặt ba khái niệm cạnh nhau
            </h1>
            <p className="mt-5 text-lg leading-8 text-indigo-100">
              Bảng này giúp người xem không đánh đồng tôn giáo, tín ngưỡng và
              mê tín dị đoan khi phân tích tình huống cụ thể.
            </p>
          </div>
          <Link
            href="/cards"
            className="rounded-full bg-amber-200 px-6 py-3 text-center text-sm font-black text-indigo-950 transition hover:bg-amber-100"
          >
            Sang bộ thẻ
          </Link>
        </div>

        <div className="mt-10 text-slate-900">
          <ComparisonTable />
        </div>
      </div>
    </div>
  );
}
