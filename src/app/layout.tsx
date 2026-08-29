import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { configuredSocialLinks } from "@/config/social";

const title = "Jean Pires | Tecnologia, IA Aplicada e Produtos Digitais";
const description =
  "Tecnologia, inteligência artificial aplicada e produtos digitais para transformar ideias e desafios de negócio em soluções reais.";
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
    jobTitle: ["Founder", "CTO"],
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
    sameAs: configuredSocialLinks.map((link) => link.href),
    knowsAbout: [
      "Tecnologia",
      "Inteligência Artificial aplicada",
      "Produtos Digitais",
      "Arquitetura de Software",
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
