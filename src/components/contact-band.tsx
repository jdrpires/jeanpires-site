import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/config/social";

export function ContactBand() {
  return (
    <section className="border-t border-white/10 bg-[#050914]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Contato
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
            Tem um problema que tecnologia pode ajudar a resolver?
          </h2>
          <p className="mt-5 text-lg text-slate-300">Vamos conversar.</p>
        </div>
        <div className="flex flex-col justify-end gap-5">
          <Link
            href="/contato"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Falar com Jean
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.map(({ label, href, icon: Icon, handle }) => (
              <Link
                key={label}
                href={href ?? "#"}
                aria-disabled={!href}
                className="flex min-h-14 items-center gap-3 rounded-md border border-white/10 bg-white/[0.025] px-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white aria-disabled:pointer-events-none aria-disabled:opacity-50"
                target={href ? "_blank" : undefined}
                rel={href ? "noreferrer" : undefined}
              >
                <Icon className="size-4 text-cyan-200" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-slate-100">
                    {label}
                  </span>
                  <span className="text-xs text-slate-500">{handle}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
