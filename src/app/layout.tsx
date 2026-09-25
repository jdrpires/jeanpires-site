import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { sameAsSocialLinks } from "@/config/social";

const title =
  "Jean Pires | Founder, CTO, Arquitetura de Software e IA Aplicada";
const description =
  "Founder da Code Synergy e CTO da PlugZ. Arquitetura de software, IA aplicada, fintech, produtos digitais, integrações enterprise e liderança tecnológica.";
const siteUrl = "https://jeanpires.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Jean Pires",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jean Pires - Tecnologia para transformar negócios.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jean Pires",
    url: siteUrl,
    jobTitle: [
      "Founder & CEO",
      "CTO",
      "Software Architect",
      "AI Hub Leader",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Code Synergy",
      },
      {
        "@type": "Organization",
        name: "PlugZ",
      },
      {
        "@type": "Organization",
        name: "IAHub - ONOVOLAB",
      },
    ],
    sameAs: sameAsSocialLinks.map((link) => link.href),
    knowsAbout: [
      "Arquitetura de Software",
      "Inteligência Artificial Aplicada",
      "Produtos Digitais",
      "Fintech e Pagamentos",
      "Integrações Enterprise",
      "Cloud Architecture",
      "Automotive e Edge Computing",
      "Estratégia Tecnológica",
      "Liderança Técnica",
    ],
  };

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
