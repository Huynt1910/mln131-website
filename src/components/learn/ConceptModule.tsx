import Image from "next/image";

import type { Concept } from "@/src/data/concepts";
import { scenarioTone } from "@/src/data/scenarios";

type ConceptModuleProps = {
  concept: Concept;
};

export default function ConceptModule({ concept }: ConceptModuleProps) {
  const tone = scenarioTone[concept.type];

  return (
    <article
      className={`rounded-[2rem] border ${tone.border} bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className={`inline-flex rounded-full ${tone.bg} px-3 py-1 text-xs font-black ${tone.text}`}
          >
            {concept.shortTitle}
          </span>
          <h2 className="mt-4 text-3xl font-black text-indigo-950">
            {concept.title}
          </h2>
        </div>
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-3xl border border-white bg-indigo-50 shadow-lg shadow-indigo-950/10">
          <Image
            src={concept.iconImage}
            alt={`Icon ${concept.shortTitle}`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      </div>

      <p className="mt-5 text-base leading-8 text-slate-600">{concept.summary}</p>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
            Dấu hiệu nhận biết
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {concept.signs.map((sign) => (
              <li key={sign} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
            Ví dụ
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {concept.examples.map((example) => (
              <span
                key={example}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
              >
                {example}
              </span>
            ))}
          </div>
          <p className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900">
            {concept.note}
          </p>
        </div>
      </div>
    </article>
  );
}
