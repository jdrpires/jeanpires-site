import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/config/social";

export const metadata: Metadata = {
  title: "Contato | Jean Pires",
  description:
    "Canais de contato de Jean Pires para conversas sobre tecnologia, IA aplicada e produtos digitais.",
  alternates: {
    canonical: "/contato",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="tech-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contato
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl">
              Tem um problema que tecnologia pode ajudar a resolver?
            </h1>
            <p className="mt-6 text-xl text-slate-300">Vamos conversar.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <div className="grid gap-3">
              {socialLinks.map(({ label, href, icon: Icon, handle }) => (
                <Link
                  key={label}
                  href={href ?? "#"}
                  aria-disabled={!href}
                  className="flex min-h-16 items-center justify-between gap-4 rounded-md border border-white/10 bg-slate-950/35 px-4 text-sm text-slate-300 transition hover:border-cyan-300/35 hover:text-white aria-disabled:pointer-events-none aria-disabled:opacity-50"
                  target={href ? "_blank" : undefined}
                  rel={href ? "noreferrer" : undefined}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-5 text-cyan-200" aria-hidden="true" />
                    <span>
                      <span className="block font-medium text-slate-100">
                        {label}
                      </span>
                      <span className="text-xs text-slate-500">{handle}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-slate-500" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
