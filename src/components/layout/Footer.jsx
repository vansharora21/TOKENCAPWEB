import Link from "next/link";
import { footerNavigation, footerContact, productHuntBadge } from "@/data/navigation";

const linkClass =
  "rounded text-sm text-repo-muted hover:text-repo-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-repo-ink";

function FooterLink({ link }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={linkClass}>
      {link.label}
    </Link>
  );
}

const groups = [...footerNavigation, { title: "More", links: footerContact }];

function Footer() {
  return (
    <footer className="border-t border-repo-ink/10 bg-repo-ground text-repo-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="text-[17px] font-semibold tracking-[-0.02em]">TokenCap</p>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-repo-muted">
            Local repository intelligence for AI coding agents. MIT licensed.
          </p>
          <a href={productHuntBadge.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-repo-ink">
            {/* External SVG badge served by Product Hunt; next/image adds nothing for it. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={productHuntBadge.src} alt="TokenCap on Product Hunt" width={250} height={54} loading="lazy" />
          </a>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-8">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs text-repo-muted">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export { Footer };
