import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Building2,
  Cpu,
  Layers3,
  Network,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ContactBand } from "@/components/contact-band";
import { InsightList } from "@/components/insight-list";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";

const currentWork = [
  {
    company: "Code Synergy",
    role: "Founder",
    description:
      "Tecnologia, desenvolvimento de produtos digitais, inteligência artificial aplicada e transformação de ideias em software.",
  },
  {
    company: "PlugZ",
    role: "CTO",
    description:
      "Estratégia tecnológica, produtos, plataformas e infraestrutura para um ecossistema conectado ao mercado de franquias.",
  },
  {
    company: "IAHub — ONOVOLAB",
    role: "IA aplicada",
    description:
      "Ambiente de experimentação, desenvolvimento e aplicação prática de inteligência artificial.",
  },
];

const services = [
  {
    title: "IA Aplicada",
    description:
      "Transformação de processos e produtos utilizando inteligência artificial de forma prática.",
    icon: BrainCircuit,
  },
  {
    title: "Produtos Digitais",
    description: "Da ideia à arquitetura, desenvolvimento e operação.",
    icon: Layers3,
  },
  {
    title: "Estratégia Tecnológica",
    description:
      "Decisões técnicas alinhadas ao momento e aos objetivos do negócio.",
    icon: Route,
  },
  {
    title: "Arquitetura & Engenharia",
    description: "Sistemas escaláveis, seguros e preparados para evoluir.",
    icon: Network,
  },
  {
    title: "CTO as a Service",
    description:
      "Liderança tecnológica para empresas que precisam de direção técnica sem estruturar uma cadeira executiva interna desde o início.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="tech-grid absolute inset-0 opacity-80" aria-hidden="true" />
        <div className="absolute left-1/2 top-24 h-px w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.04fr_0.72fr] lg:px-8">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300">
              <Sparkles className="size-4 text-cyan-200" aria-hidden="true" />
              IA aplicada, produto e engenharia em operação
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Tecnologia para transformar negócios.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
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

          <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/12 bg-[#091120]">
              <Image
                src="/jean-placeholder.jpg"
                alt="Placeholder para futura fotografia profissional de Jean Pires"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-slate-950/72 p-5 backdrop-blur-md">
                <p className="text-sm font-medium text-white">
                  Foto profissional em breve
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Área preparada para receber a imagem definitiva.
                </p>
              </div>
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
              e passou a ser uma forma de transformar operações, produtos e
              modelos de negócio. Hoje sua atuação combina engenharia,
              inteligência artificial aplicada e estratégia para construir
              soluções que efetivamente chegam à operação.
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
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-slate-950/50">
                  <Building2 className="size-5 text-cyan-200" aria-hidden="true" />
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
