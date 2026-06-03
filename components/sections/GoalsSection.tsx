type GoalsSectionProps = {
  goals: {
    title: string;
    description: string;
  };
};

export default function GoalsSection({ goals }: GoalsSectionProps) {
  return (
    <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
      <h3 className="text-2xl font-semibold text-slate-900">{goals.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        {goals.description}
      </p>
    </section>
  );
}
