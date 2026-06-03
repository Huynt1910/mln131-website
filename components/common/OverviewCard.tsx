type OverviewCardProps = {
  title: string;
  description: string;
  isLarge?: boolean;
};

export default function OverviewCard({
  description,
  isLarge = false,
  title,
}: OverviewCardProps) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500">
        {title}
      </h3>
      <p
        className={
          isLarge
            ? "mt-3 text-3xl font-semibold text-slate-900"
            : "mt-3 text-lg leading-7 text-slate-700"
        }
      >
        {description}
      </p>
    </div>
  );
}
