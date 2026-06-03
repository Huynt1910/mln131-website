import Link from "next/link";

const features = [
  {
    title: "Kiến thức nền",
    description: "Ba module ngắn gọn để nhận diện tôn giáo, tín ngưỡng và mê tín.",
    href: "/learn",
  },
  {
    title: "Bảng so sánh",
    description: "Đối chiếu theo bản chất, cơ sở niềm tin, tổ chức và tác động xã hội.",
    href: "/compare",
  },
  {
    title: "Bộ thẻ tình huống",
    description: "Lật thẻ để xem đáp án và giải thích từng tình huống đời sống.",
    href: "/cards",
  },
  {
    title: "Quiz phân loại",
    description: "Chọn đáp án, xem đúng sai, theo dõi điểm và nhận tổng kết.",
    href: "/quiz",
  },
];

export default function FeatureCards() {
  return (
    <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature) => (
        <Link
          key={feature.href}
          href={feature.href}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/10"
        >
          <h2 className="text-xl font-black text-indigo-950">{feature.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {feature.description}
          </p>
          <span className="mt-5 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">
            Mở trang
          </span>
        </Link>
      ))}
    </section>
  );
}
