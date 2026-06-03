"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/learn", label: "Học" },
  { href: "/compare", label: "So sánh" },
  { href: "/cards", label: "Bộ thẻ" },
  { href: "/quiz", label: "Quiz" },
  { href: "/result", label: "Kết quả" },
  { href: "/about", label: "Giới thiệu" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-950 text-sm font-black text-amber-200 shadow-lg shadow-indigo-950/15">
            MLN
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black text-indigo-950">
              Tín ngưỡng hay mê tín?
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
              Bộ thẻ phân loại
            </span>
          </span>
        </Link>

        <nav className="flex max-w-[72vw] items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-1 text-sm font-bold text-slate-600 shadow-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-3 py-2 transition ${
                  isActive
                    ? "bg-indigo-950 text-white shadow-sm"
                    : "hover:bg-indigo-50 hover:text-indigo-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
