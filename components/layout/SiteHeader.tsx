import Link from "next/link";

export type NavLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  brandCode: string;
  title: string;
  navLinks: readonly NavLink[];
  activeHref: string;
};

export default function SiteHeader({
  activeHref,
  brandCode,
  navLinks,
  title,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {brandCode}
          </p>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
        </div>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.href === activeHref
                  ? "text-slate-900 hover:text-slate-950"
                  : "text-slate-600 hover:text-slate-900"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
