import { vscodeFeatures } from "@/data/vscode";

function ExtensionFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {vscodeFeatures.map((feature) => (
        <article key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

export { ExtensionFeatures };
