const navItems = [
  { href: "#hero", label: "Giới thiệu" },
  { href: "#theory", label: "Kiến thức" },
  { href: "#compare", label: "So sánh" },
  { href: "#game", label: "Trò chơi" },
  { href: "#message", label: "Kết luận" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-950 text-sm font-black text-amber-200">
            MLN
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.2em] text-indigo-950 sm:block">
            CNXH khoa học
          </span>
        </a>
        <nav className="flex max-w-[72vw] items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white/70 p-1 text-sm font-semibold text-slate-600 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 transition hover:bg-indigo-50 hover:text-indigo-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
