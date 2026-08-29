import type { LucideIcon } from "lucide-react";
import { AtSign, Hash, Link, Mail, MessageCircle } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string | null;
  icon: LucideIcon;
  handle?: string;
};

export const socialLinks = [
  {
    label: "WhatsApp",
    href: null,
    icon: MessageCircle,
    handle: "TODO",
  },
  {
    label: "LinkedIn",
    href: null,
    icon: Link,
    handle: "TODO",
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
    handle: "TODO",
  },
] satisfies SocialLink[];
