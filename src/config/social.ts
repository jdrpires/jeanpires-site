import type { LucideIcon } from "lucide-react";
import { AtSign, Hash, Link, Mail, MessageCircle } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string | null;
  icon: LucideIcon;
  handle?: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "WhatsApp",
    href: null,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: null,
    icon: Link,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jeandrpires",
    icon: AtSign,
    handle: "@jeandrpires",
  },
  {
    label: "X",
    href: "https://x.com/jeandrpires",
    icon: Hash,
    handle: "@jeandrpires",
  },
  {
    label: "E-mail",
    href: null,
    icon: Mail,
  },
];

export const configuredSocialLinks = socialLinks.filter(
  (link): link is SocialLink & { href: string } => Boolean(link.href),
);
