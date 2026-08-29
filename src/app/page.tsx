import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Cpu,
  Layers3,
  Network,
  Route,
  ShieldCheck,
} from "lucide-react";
import { ContactBand } from "@/components/contact-band";
import { InsightList } from "@/components/insight-list";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";
import { heroImage } from "@/config/assets";
import { currentWork } from "@/data/current-work";
import { findLogoPath, publicAssetExists } from "@/lib/public-assets";

const services = [
  {
    title: "IA Aplicada",
    description:
      "Uso de inteligência artificial para melhorar produtos, processos e decisões, com foco em aplicação prática.",
    icon: BrainCircuit,
  },
  {
    title: "Produtos Digitais",
    description:
      "Estratégia, arquitetura e desenvolvimento para transformar uma ideia em produto em operação.",
    icon: Layers3,
  },
  {
    title: "Estratégia Tecnológica",
    description:
      "Decisões de tecnologia conectadas ao momento, restrições e objetivos do negócio.",
    icon: Route,
  },
  {
    title: "Arquitetura & Engenharia",
    description:
      "Sistemas seguros, escaláveis e preparados para evoluir sem criar complexidade desnecessária.",
    icon: Network,
  },
  {
    title: "CTO as a Service",
    description:
      "Direção tecnológica para empresas que precisam de liderança técnica e executiva sem estruturar uma cadeira de CTO interna desde o início.",
    icon: ShieldCheck,
  },
];

function WorkLogo({ item }: { item: (typeof currentWork)[number] }) {
  const logoPath = findLogoPath(item.logoBasePath);

  if (logoPath) {
    return (
      <Image
        src={logoPath}
        alt={`Logo ${item.company}`}
        width={160}
        height={48}
        className="max-h-12 w-auto object-contain"
        unoptimized={logoPath.endsWith(".svg")}
      />
    );
  }

  return (
    <div className="flex h-12 min-w-12 items-center justify-center rounded-md border border-white/10 bg-slate-950/45 px-3 text-sm font-semibold tracking-[0.16em] text-cyan-100">
      {item.fallbackMark}
    </div>
  );
}

export default function Home() {
  const portraitSrc = publicAssetExists(heroImage.primary)
    ? heroImage.primary
    : heroImage.fallback;

  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          className="tech-grid absolute inset-0 opacity-50"
          aria-hidden="true"
        />
        <div className="absolute right-0 top-16 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-5 pb-12 pt-14 sm:px-6 md:pb-16 md:pt-18 lg:grid-cols-[1.06fr_0.7fr] lg:gap-14 lg:px-8">
          <div className="relative z-10">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Tecnologia para transformar negócios.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              IA aplicada, produtos digitais e estratégia tecnológica para tirar
              ideias do papel e colocá-las em operação.
            </p>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-300">
              <span>Founder Code Synergy</span>
              <span className="text-cyan-300">•</span>
              <span>CTO PlugZ</span>
              <span className="text-cyan-300">•</span>
              <span>IAHub ONOVOLAB</span>
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Vamos conversar
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-300/45"
              >
                Conheça meu trabalho
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[15.5rem] sm:max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#091120] shadow-2xl shadow-black/20 ring-1 ring-white/10">
              <Image
                src={portraitSrc}
                alt={heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-t border-white/10 bg-[#070b16]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.04] p-6">
            <p className="text-5xl font-semibold text-white">25+</p>
            <p className="mt-3 text-sm font-medium text-cyan-100">
              anos construindo tecnologia
            </p>
          </div>
          <SectionHeading title="Tecnologia sempre foi sobre resolver problemas.">
            <p>
              Jean Pires trabalha com tecnologia há mais de duas décadas,
              passando por desenvolvimento de software, arquitetura, produtos
              digitais e liderança tecnológica.
            </p>
            <p className="mt-5">
              Ao longo dessa trajetória, tecnologia deixou de ser apenas código
              e passou a ser uma ferramenta para transformar operações, produtos
              e modelos de negócio. Hoje sua atuação combina engenharia,
              inteligência artificial aplicada, produto e estratégia para
              transformar problemas reais em soluções que chegam à operação.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section id="atuacao" className="bg-[#050812]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Atuação"
            title="Onde estou construindo hoje"
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {currentWork.map((item) => (
              <article
                key={item.company}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-8 flex h-14 items-center">
                  <WorkLogo item={item} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-violet-200">
                  {item.role}
                </p>
                <p className="mt-5 leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080d19]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading title="Tecnologia como ferramenta de negócio.">
            <p>
              A entrega certa nasce quando estratégia, arquitetura e execução
              caminham juntas.
            </p>
          </SectionHeading>
          <div className="grid gap-4">
            {services.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-[2.5rem_1fr]"
              >
                <div className="grid size-10 place-items-center rounded-md bg-cyan-300/10">
                  <Icon className="size-5 text-cyan-200" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050812]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Projetos"
              title="Algumas coisas que estou construindo."
            />
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              Ver projetos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ProjectGrid limit={3} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#070b16]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="Pensamentos sobre tecnologia, IA e produto."
          >
            <p>Notas, aprendizados e opiniões de quem continua construindo.</p>
          </SectionHeading>
          <div className="mt-12">
            <InsightList compact />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050812]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Tecnologia", "Escolhas técnicas conectadas a objetivo."],
            ["Produto", "Execução com clareza sobre uso e operação."],
            ["Negócios", "Soluções digitais que fazem sentido fora do código."],
          ].map(([title, text]) => (
            <div key={title} className="flex items-start gap-4">
              <div className="mt-1 grid size-9 place-items-center rounded-md bg-violet-300/10">
                <Cpu className="size-4 text-violet-200" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
