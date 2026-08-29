import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050812]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 font-medium text-white"
          aria-label="Jean Pires - Home"
        >
          <span className="grid size-8 place-items-center rounded border border-white/15 bg-white/[0.03] text-[0.72rem] tracking-[0.14em] text-slate-100 transition-colors group-hover:border-cyan-300/50">
            JP
          </span>
          <span className="hidden text-sm text-slate-100 sm:inline">
            Jean Pires
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm text-slate-300 lg:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3.5 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/15"
        >
          Vamos conversar
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
