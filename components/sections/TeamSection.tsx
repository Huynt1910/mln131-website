import TeamMemberCard from "@/components/common/TeamMemberCard";

type TeamSectionProps = {
  team: {
    eyebrow: string;
    sectionNumber: string;
    title: string;
    members: readonly {
      name: string;
      role: string;
      tag: string;
      subtitle: string;
      description: string;
      avatarLabel: string;
      avatarTone: "green" | "slate" | "sky" | "amber" | "rose";
    }[];
  };
};

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <section className="mt-12 border border-slate-200 bg-white px-5 py-8 shadow-sm shadow-slate-200/50 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="flex w-full items-center gap-4">
            <span className="flex h-7 w-24 items-center justify-center bg-lime-600 text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
              {team.sectionNumber}
            </span>
            <span className="h-px flex-1 border-t border-dashed border-slate-300" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-lime-700">
            {team.eyebrow}
          </p>
          <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-slate-800 sm:text-4xl">
            {team.title}
          </h3>
        </div>

        <div className="mt-10 grid justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
          {team.members.map((member) => (
            <TeamMemberCard
              key={member.name}
              avatarLabel={member.avatarLabel}
              avatarTone={member.avatarTone}
              description={member.description}
              name={member.name}
              role={member.role}
              subtitle={member.subtitle}
              tag={member.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
