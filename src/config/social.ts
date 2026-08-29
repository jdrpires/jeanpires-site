import type { LucideIcon } from "lucide-react";
import { AtSign, Hash, Link, Mail, MessageCircle } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string | null;
  icon: LucideIcon;
  handle?: string;
  sameAs?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5516992383087",
    icon: MessageCircle,
    handle: "+55 16 99238-3087",
    sameAs: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jdrpires/",
    icon: Link,
    handle: "/in/jdrpires",
    sameAs: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jeandrpires",
    icon: AtSign,
    handle: "@jeandrpires",
    sameAs: true,
  },
  {
    label: "X",
    href: "https://x.com/jeandrpires",
    icon: Hash,
    handle: "@jeandrpires",
    sameAs: true,
  },
  {
    label: "E-mail",
    href: null,
    icon: Mail,
    sameAs: false,
  },
];

export const configuredSocialLinks = socialLinks.filter(
  (link): link is SocialLink & { href: string } => Boolean(link.href),
);

export const sameAsSocialLinks = configuredSocialLinks.filter(
  (link) => link.sameAs,
);
