import { comparisonRows } from "@/src/data/comparison";

export default function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-indigo-100 bg-white shadow-xl shadow-indigo-950/10">
      <div className="overflow-x-auto">
        <table className="min-w-[920px] w-full border-collapse text-left">
          <thead>
            <tr className="bg-indigo-950 text-sm font-black text-white">
              <th className="w-[18%] px-5 py-4">Tiêu chí</th>
              <th className="w-[27%] px-5 py-4">Tôn giáo</th>
              <th className="w-[27%] px-5 py-4">Tín ngưỡng</th>
              <th className="w-[28%] px-5 py-4">Mê tín dị đoan</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.criterion} className="border-t border-slate-100">
                <th className="bg-sky-50 px-5 py-4 text-sm font-black text-indigo-950">
                  {row.criterion}
                </th>
                <td className="px-5 py-4 text-sm leading-6 text-slate-700">
                  {row.religion}
                </td>
                <td className="px-5 py-4 text-sm leading-6 text-slate-700">
                  {row.belief}
                </td>
                <td className="px-5 py-4 text-sm leading-6 text-slate-700">
                  {row.superstition}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
