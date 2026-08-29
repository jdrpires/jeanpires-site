import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { InsightList } from "@/components/insight-list";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Insights | Jean Pires",
  description:
    "Notas, aprendizados e opiniões sobre tecnologia, IA aplicada e produtos digitais.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="tech-grid absolute inset-0 opacity-70"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="Pensamentos sobre tecnologia, IA e produto."
          >
            <p>
              Notas, aprendizados e opiniões de quem continua construindo. Os
              artigos entram aqui quando houver conteúdo publicado.
            </p>
          </SectionHeading>
        </div>
      </section>
      <section className="bg-[#050812]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <InsightList />
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
