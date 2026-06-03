import Link from "next/link";

import ConceptModule from "@/src/components/learn/ConceptModule";
import { concepts } from "@/src/data/concepts";

export default function LearnPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
            Học kiến thức nền
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
            Ba khái niệm cần phân biệt
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Trọng tâm là nhìn vào dấu hiệu: tổ chức và giáo lý của tôn giáo,
            giá trị văn hóa của tín ngưỡng, và tính mù quáng gây hại của mê tín
            dị đoan.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {concepts.map((concept) => (
            <ConceptModule key={concept.type} concept={concept} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/compare"
            className="rounded-full bg-indigo-950 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-indigo-800"
          >
            Xem bảng so sánh
          </Link>
          <Link
            href="/cards"
            className="rounded-full border border-indigo-200 px-6 py-3 text-center text-sm font-black text-indigo-950 transition hover:bg-indigo-50"
          >
            Luyện bằng bộ thẻ
          </Link>
        </div>
      </div>
    </div>
  );
}
