import Link from "next/link";
import { socialLinks } from "@/config/social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#040711]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">Jean Pires</p>
          <p className="mt-1 text-sm text-slate-400">
            Tecnologia • IA Aplicada • Produtos Digitais
          </p>
          <p className="mt-3 text-xs text-slate-500">© {year} Jean Pires.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) =>
            href ? (
              <Link
                key={label}
                href={href}
                className="grid size-9 place-items-center rounded-md border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-white"
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon className="size-4" aria-hidden="true" />
              </Link>
            ) : null,
          )}
        </div>
      </div>
    </footer>
  );
}
