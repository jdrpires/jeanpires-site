import Image from "next/image";
import Link from "next/link";
import { clients, type Client } from "@/data/clients";
import { findLogoPath } from "@/lib/public-assets";

function ClientLogo({ client }: { client: Client }) {
  const logoPath = findLogoPath(client.logo);

  if (!logoPath) {
    return null;
  }

  const logo = (
    <Image
      src={logoPath}
      alt={client.name}
      width={176}
      height={64}
      sizes="176px"
      className="h-auto max-h-12 w-auto max-w-[10.5rem] object-contain"
      unoptimized
    />
  );

  if (client.url) {
    return (
      <Link
        href={client.url}
        target="_blank"
        rel="noreferrer"
        aria-label={client.name}
        className="inline-flex h-16 w-36 items-center justify-center transition hover:opacity-80"
      >
        {logo}
      </Link>
    );
  }

  return (
    <div className="inline-flex h-16 w-36 items-center justify-center">
      {logo}
    </div>
  );
}

export function ClientLogoGrid() {
  const visibleClients = clients.filter(
    (client) => findLogoPath(client.logo) !== null,
  );

  if (visibleClients.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
      {visibleClients.map((client) => (
        <ClientLogo key={client.name} client={client} />
      ))}
    </div>
  );
}

export function hasVisibleClients() {
  return clients.some((client) => findLogoPath(client.logo) !== null);
}
