import { CopyButton } from "@/components/shared/CopyButton";
import { hostsSection } from "@/data/homeSections";

export function HostsSection() {
  return (
    <section aria-labelledby="hosts-title" className="border-t border-repo-ink/10 bg-repo-ground py-20 text-repo-ink lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <h2 id="hosts-title" className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{hostsSection.title}</h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-repo-muted">{hostsSection.body}</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-lg bg-repo-ink py-2 pl-4 pr-2 font-mono text-sm text-repo-ground">
            <span aria-hidden="true" className="opacity-60">$</span>
            {hostsSection.command}
            <CopyButton text={hostsSection.command} />
          </div>
          <p className="mt-3 text-sm text-repo-muted">{hostsSection.commandNote}</p>
        </div>

        {/* The real file each host reads, so a reader can check their own repo. */}
        <table className="w-full self-start text-left lg:col-span-6 lg:col-start-7">
          <caption className="sr-only">Pointer file written for each AI tool</caption>
          <thead>
            <tr className="text-xs text-repo-muted">
              <th scope="col" className="pb-3 font-normal">File in your repo</th>
              <th scope="col" className="pb-3 font-normal">Read by</th>
            </tr>
          </thead>
          <tbody>
            {hostsSection.pointers.map((p) => (
              <tr key={p.file} className="border-t border-repo-ink/10">
                <td className="py-3 pr-4 font-mono text-[13px] break-all">{p.file}</td>
                <td className="py-3 text-sm">{p.host}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
