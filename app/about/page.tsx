import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-indigo-100 bg-[radial-gradient(circle_at_top_left,#fde68a_0,#dbeafe_35%,#ffffff_72%)] p-6 shadow-xl shadow-indigo-950/10 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
            Giới thiệu sản phẩm
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
            Website hỗ trợ thuyết trình bằng trải nghiệm học - luyện - kiểm tra
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Sản phẩm giúp phần trình bày về tôn giáo, tín ngưỡng và mê tín dị
            đoan trở nên dễ theo dõi hơn. Người xem không chỉ đọc định nghĩa mà
            còn trực tiếp phân loại tình huống, xem giải thích và tự kiểm tra
            mức độ hiểu bài.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Hỗ trợ người thuyết trình",
              text: "Có lộ trình rõ ràng để dẫn dắt lớp từ khái niệm đến ví dụ và hoạt động tương tác.",
            },
            {
              title: "Hỗ trợ người học",
              text: "Mỗi tình huống có đáp án và giải thích, giúp phân biệt dựa trên dấu hiệu cụ thể.",
            },
            {
              title: "Thông điệp xã hội",
              text: "Tôn trọng tự do tín ngưỡng, tôn giáo; giữ gìn giá trị văn hóa; bài trừ mê tín gây hại.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-black text-indigo-950">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-[2rem] bg-indigo-950 p-6 text-white sm:p-8">
          <h2 className="text-3xl font-black">Cách dùng khi thuyết trình</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {["Trang chủ", "Học kiến thức", "So sánh", "Lật thẻ", "Quiz và kết quả"].map(
              (step, index) => (
                <div key={step} className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-black text-amber-200">{index + 1}</p>
                  <p className="mt-2 text-sm font-bold leading-6">{step}</p>
                </div>
              ),
            )}
          </div>
          <Link
            href="/learn"
            className="mt-6 inline-flex rounded-full bg-amber-200 px-6 py-3 text-sm font-black text-indigo-950 transition hover:bg-amber-100"
          >
            Bắt đầu với kiến thức nền
          </Link>
        </section>
      </div>
    </div>
  );
}
