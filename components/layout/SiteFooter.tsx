import Link from "next/link";

type SiteFooterLink = {
  href: string;
  label: string;
};

type SiteFooterProps = {
  title: string;
  description: string;
  copyright: string;
  links?: readonly SiteFooterLink[];
};

export default function SiteFooter({
  copyright,
  description,
  links = [],
  title,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-2 text-sm text-slate-600">{description}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
          <span>{copyright}</span>
        </div>
      </div>
    </footer>
  );
}
