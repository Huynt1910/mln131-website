import Link from "next/link";

import OverviewCard from "@/components/common/OverviewCard";

type HomeHeroAction = {
  href: string;
  label: string;
};

type HomeHeroSectionProps = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: HomeHeroAction;
    secondaryAction: HomeHeroAction;
  };
  overview: readonly {
    title: string;
    description: string;
    isLarge?: boolean;
  }[];
};

export default function HomeHeroSection({
  hero,
  overview,
}: HomeHeroSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/50">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
            {hero.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {hero.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryAction.href}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {hero.primaryAction.label}
            </Link>
            <a
              href={hero.secondaryAction.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {hero.secondaryAction.label}
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-50 p-8 shadow-inner shadow-slate-200/40">
          <div className="space-y-6">
            {overview.map((item) => (
              <OverviewCard
                key={item.title}
                description={item.description}
                isLarge={item.isLarge}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
