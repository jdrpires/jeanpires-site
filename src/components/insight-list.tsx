import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";

type InsightListProps = {
  compact?: boolean;
};

export function InsightList({ compact = false }: InsightListProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {insights.map((insight) => (
        <article
          key={insight.title}
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <div className="flex items-center justify-between gap-4 text-xs">
            <span className="font-medium text-cyan-200">{insight.tag}</span>
            <span className="text-slate-500">{insight.status}</span>
          </div>
          <h3 className="mt-5 text-lg font-semibold leading-snug text-white">
            {insight.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-300">{insight.description}</p>
          {!compact ? (
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
              Artigo em preparação
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          ) : null}
        </article>
      ))}
      {compact ? (
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100 lg:col-span-3"
        >
          Ver todos os insights
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
