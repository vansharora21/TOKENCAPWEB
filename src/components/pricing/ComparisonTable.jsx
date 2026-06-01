import { comparisonRows } from "@/data/pricing";

function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/10 text-slate-300">
          <tr>
            <th className="px-6 py-4 font-medium">Capability</th>
            <th className="px-6 py-4 font-medium">TokenCap</th>
            <th className="px-6 py-4 font-medium">Typical stack</th>
            <th className="px-6 py-4 font-medium">Notes</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row[0]} className="border-b border-white/10 last:border-b-0">
              <td className="px-6 py-4 text-white">{row[0]}</td>
              <td className="px-6 py-4 text-slate-300">{row[1]}</td>
              <td className="px-6 py-4 text-slate-300">{row[2]}</td>
              <td className="px-6 py-4 text-slate-300">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { ComparisonTable };
