import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Projetos | Jean Pires",
  description:
    "Cases e projetos em tecnologia, produtos digitais, IA aplicada, automação e plataformas B2B.",
  alternates: {
    canonical: "/projetos",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="tech-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projetos"
            title="Algumas coisas que estou construindo."
          >
            <p>
              Uma estrutura inicial para cases futuros, sem prometer resultados
              que ainda não foram documentados publicamente.
            </p>
          </SectionHeading>
        </div>
      </section>
      <section className="bg-[#050812]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
