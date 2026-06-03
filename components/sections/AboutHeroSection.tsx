type AboutHeroSectionProps = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  vision: {
    eyebrow: string;
    description: string;
  };
};

export default function AboutHeroSection({
  hero,
  vision,
}: AboutHeroSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/50">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
            {hero.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            {hero.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            {hero.description}
          </p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-8 shadow-inner shadow-slate-200/40">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            {vision.eyebrow}
          </p>
          <p className="mt-4 text-lg leading-7 text-slate-700">
            {vision.description}
          </p>
        </div>
      </div>
    </section>
  );
}
