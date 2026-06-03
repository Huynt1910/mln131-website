type TeamMemberCardProps = {
  name: string;
  role: string;
  tag: string;
  subtitle: string;
  description: string;
  avatarLabel: string;
  avatarTone: "green" | "slate" | "sky" | "amber" | "rose";
};

const avatarToneClasses: Record<TeamMemberCardProps["avatarTone"], string> = {
  amber: "from-amber-100 via-amber-50 to-white text-amber-700",
  green: "from-lime-100 via-lime-50 to-white text-lime-700",
  rose: "from-rose-100 via-rose-50 to-white text-rose-700",
  sky: "from-sky-100 via-sky-50 to-white text-sky-700",
  slate: "from-slate-200 via-slate-100 to-white text-slate-700",
};

export default function TeamMemberCard({
  avatarLabel,
  avatarTone,
  description,
  name,
  role,
  subtitle,
  tag,
}: TeamMemberCardProps) {
  return (
    <article className="w-full max-w-[21rem] text-center sm:text-left">
      <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden bg-slate-100 sm:mx-0">
        <div className="absolute left-0 top-0 z-10 flex h-full w-8 items-center justify-center bg-lime-600 text-white">
          <span className="-rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em]">
            {tag}
          </span>
        </div>

        <div
          className={`flex h-full items-center justify-center bg-gradient-to-br pl-8 ${avatarToneClasses[avatarTone]}`}
        >
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-current/20 bg-white/70 shadow-inner">
            <div className="absolute top-5 h-9 w-9 rounded-full border border-current/30 bg-current/10" />
            <div className="absolute bottom-5 h-12 w-16 rounded-t-full border border-current/30 bg-current/10" />
            <span className="relative mt-10 text-lg font-bold tracking-[0.18em]">
              {avatarLabel}
            </span>
          </div>
        </div>
      </div>

      <h4 className="mt-5 text-xl font-bold text-lime-700">{name}</h4>
      <p className="mt-1 text-sm italic text-slate-500">{subtitle}</p>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
        {role}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
