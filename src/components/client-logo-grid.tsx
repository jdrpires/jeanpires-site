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
      className="h-auto max-h-14 w-auto max-w-[8.5rem] object-contain"
      unoptimized
    />
  );

  const surfaceClasses =
    "flex h-24 w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-4";

  if (client.url) {
    return (
      <Link
        href={client.url}
        target="_blank"
        rel="noreferrer"
        className={`${surfaceClasses} transition hover:border-cyan-300/35 hover:bg-white/[0.06]`}
      >
        {logo}
      </Link>
    );
  }

  return <div className={surfaceClasses}>{logo}</div>;
}

export function ClientLogoGrid() {
  const visibleClients = clients.filter(
    (client) => findLogoPath(client.logo) !== null,
  );

  if (visibleClients.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {visibleClients.map((client) => (
        <ClientLogo key={client.name} client={client} />
      ))}
    </div>
  );
}

export function hasVisibleClients() {
  return clients.some((client) => findLogoPath(client.logo) !== null);
}
