const concepts = [
  {
    title: "Tôn giáo",
    icon: "TG",
    description:
      "Hệ thống niềm tin có giáo lý, lễ nghi, tổ chức, chức sắc và cộng đồng tín đồ.",
    className: "border-indigo-200 bg-indigo-50 text-indigo-950",
  },
  {
    title: "Tín ngưỡng",
    icon: "TN",
    description:
      "Niềm tin thiêng liêng gắn với phong tục, truyền thống và bản sắc văn hóa cộng đồng.",
    className: "border-sky-200 bg-sky-50 text-sky-950",
  },
  {
    title: "Mê tín dị đoan",
    icon: "MT",
    description:
      "Niềm tin mù quáng, thiếu cơ sở, có thể gây hại hoặc bị lợi dụng để trục lợi.",
    className: "border-amber-200 bg-amber-50 text-amber-950",
  },
];

export default function ConceptCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {concepts.map((concept) => (
        <article
          key={concept.title}
          className={`rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${concept.className}`}
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black shadow-sm">
            {concept.icon}
          </div>
          <h3 className="text-xl font-bold">{concept.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {concept.description}
          </p>
        </article>
      ))}
    </div>
  );
}
