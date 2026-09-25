import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Projetos | Jean Pires",
  description:
    "Produtos, plataformas e cases em IA aplicada, arquitetura de software, fintech, integrações, mobilidade e operações digitais.",
  alternates: {
    canonical: "/projetos",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="tech-grid absolute inset-0 opacity-70"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projetos"
            title="Produtos, plataformas e sistemas que conectam tecnologia ao negócio."
          >
            <p>
              Uma seleção de iniciativas em que atuo como criador, sócio, CTO,
              arquiteto ou líder de entrega — de mobilidade conectada e fintech
              a integrações enterprise, governança e operações digitais.
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
