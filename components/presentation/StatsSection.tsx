const stats = [
  { label: "Tổng số thẻ", value: "20", detail: "Tình huống đời sống" },
  { label: "Nhóm dễ nhầm", value: "Tín ngưỡng", detail: "Khi hành vi có yếu tố tâm linh" },
  { label: "Cần cảnh giác", value: "Mê tín", detail: "Khi có trục lợi, sợ hãi, bỏ qua khoa học" },
  { label: "Mục tiêu", value: "Tôn trọng", detail: "Tự do tín ngưỡng, tôn giáo đúng pháp luật" },
];

export default function StatsSection() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold text-slate-500">{stat.label}</p>
              <p className="mt-2 text-2xl font-black text-indigo-950">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {stat.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
