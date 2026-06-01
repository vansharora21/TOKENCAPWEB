import { cn } from "@/lib/utils";
import { Badge } from "@/components/shared/Badge";

function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className={cn("mt-4 max-w-2xl text-base leading-7 text-slate-300", align === "center" && "mx-auto")}>{description}</p> : null}
    </div>
  );
}

export { SectionHeading };