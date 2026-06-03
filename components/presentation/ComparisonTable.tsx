const rows = [
  ["Bản chất", "Hệ thống niềm tin có tổ chức", "Niềm tin văn hóa, truyền thống", "Niềm tin mù quáng, thiếu cơ sở"],
  ["Cơ sở niềm tin", "Đức tin, giáo lý", "Phong tục, truyền thống", "Sợ hãi, đồn đoán, bói toán"],
  ["Tổ chức", "Có tổ chức, chức sắc, tín đồ", "Không hoặc ít tổ chức chặt chẽ", "Không có tổ chức chính thống, dễ bị lợi dụng"],
  ["Giáo lý / giáo luật", "Có", "Không rõ ràng hoặc không có", "Không có"],
  ["Giá trị văn hóa", "Có thể có", "Có giá trị văn hóa truyền thống", "Không có giá trị tích cực rõ ràng"],
  ["Tác động xã hội", "Tích cực nếu hoạt động đúng pháp luật", "Góp phần giữ gìn bản sắc văn hóa", "Có thể gây hại, lãng phí, bị lợi dụng"],
  ["Ví dụ", "Đi lễ nhà thờ, sinh hoạt Phật giáo", "Thờ cúng tổ tiên, cúng giỗ", "Bói toán cực đoan, cúng giải hạn trục lợi"],
];

export default function ComparisonTable() {
  return (
    <section id="compare" className="bg-indigo-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-200">
              Bảng so sánh
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Nhìn nhanh điểm khác biệt
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-indigo-100">
            Trọng tâm là phân biệt giá trị văn hóa, tổ chức tôn giáo và các biểu
            hiện niềm tin mù quáng có nguy cơ gây hại.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/15 bg-white text-slate-800 shadow-2xl shadow-black/20">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-sky-50 text-sm font-black text-indigo-950">
                  <th className="w-[18%] px-5 py-4">Tiêu chí</th>
                  <th className="w-[27%] px-5 py-4">Tôn giáo</th>
                  <th className="w-[27%] px-5 py-4">Tín ngưỡng</th>
                  <th className="w-[28%] px-5 py-4">Mê tín dị đoan</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([criterion, religion, belief, superstition]) => (
                  <tr key={criterion} className="border-t border-slate-100">
                    <th className="bg-slate-50 px-5 py-4 text-sm font-black text-indigo-950">
                      {criterion}
                    </th>
                    <td className="px-5 py-4 text-sm leading-6">{religion}</td>
                    <td className="px-5 py-4 text-sm leading-6">{belief}</td>
                    <td className="px-5 py-4 text-sm leading-6">
                      {superstition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
