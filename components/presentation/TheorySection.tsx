const theory = [
  {
    title: "Tôn giáo",
    intro:
      "Tôn giáo là một hình thái ý thức xã hội, phản ánh đời sống tinh thần của con người thông qua niềm tin vào lực lượng siêu nhiên. Tôn giáo thường có hệ thống giáo lý, giáo luật, lễ nghi, tổ chức tôn giáo, cơ sở thờ tự và cộng đồng tín đồ.",
    signs: [
      "Có niềm tin vào đấng siêu nhiên",
      "Có giáo lý, giáo luật, lễ nghi",
      "Có tổ chức tôn giáo",
      "Có chức sắc, tín đồ",
      "Có cơ sở thờ tự",
    ],
    examples: ["Phật giáo", "Công giáo", "Tin Lành", "Hồi giáo", "Cao Đài", "Phật giáo Hòa Hảo"],
    tone: "border-indigo-200 bg-white",
  },
  {
    title: "Tín ngưỡng",
    intro:
      "Tín ngưỡng là niềm tin của con người vào những giá trị thiêng liêng, gắn với phong tục, truyền thống, văn hóa cộng đồng. Tín ngưỡng thường không có hệ thống giáo lý và tổ chức chặt chẽ như tôn giáo.",
    signs: [
      "Gắn với truyền thống, phong tục",
      "Mang giá trị văn hóa cộng đồng",
      "Không nhất thiết có giáo lý, giáo luật",
      "Không có tổ chức chặt chẽ như tôn giáo",
      "Không gây hại nếu được thực hiện đúng mực",
    ],
    examples: ["Thờ cúng tổ tiên", "Giỗ tổ Hùng Vương", "Thờ anh hùng dân tộc", "Đi chùa đầu năm cầu bình an", "Cúng giỗ ông bà"],
    tone: "border-sky-200 bg-white",
  },
  {
    title: "Mê tín dị đoan",
    intro:
      "Mê tín dị đoan là niềm tin mù quáng vào những điều huyền bí, không có cơ sở khoa học, có thể dẫn đến hành vi sai lệch, gây thiệt hại về tiền bạc, sức khỏe, tinh thần hoặc ảnh hưởng xấu đến xã hội.",
    signs: [
      "Tin mù quáng, không kiểm chứng",
      "Phụ thuộc hoàn toàn vào bói toán, bùa chú, giải hạn",
      "Có thể bị lợi dụng để trục lợi",
      "Gây sợ hãi, hoang mang",
      "Làm con người bỏ qua khoa học, y tế, pháp luật",
    ],
    examples: ["Bỏ chữa bệnh để đi cúng bái", "Vay tiền làm lễ giải hạn", "Tin bói toán quyết định toàn bộ tương lai", "Mua bùa để trúng số", "Đốt vàng mã quá mức gây lãng phí"],
    tone: "border-amber-200 bg-white",
  },
];

export default function TheorySection() {
  return (
    <section id="theory" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
            Kiến thức nền
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-indigo-950">
            Phân biệt từ dấu hiệu nhận biết
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Tôn giáo không đồng nghĩa với mê tín. Tín ngưỡng truyền thống có
            giá trị văn hóa, còn mê tín dị đoan là niềm tin mù quáng và có thể
            gây hại.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {theory.map((item) => (
            <article
              key={item.title}
              className={`rounded-3xl border p-6 shadow-sm ${item.tone}`}
            >
              <h3 className="text-2xl font-black text-indigo-950">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.intro}</p>
              <h4 className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-indigo-900">
                Dấu hiệu
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {item.signs.map((sign) => (
                  <li key={sign} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
