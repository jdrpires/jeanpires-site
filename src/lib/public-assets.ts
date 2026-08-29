import { existsSync } from "node:fs";
import path from "node:path";
import { supportedLogoExtensions } from "@/config/assets";

export function publicAssetExists(assetPath: string) {
  return existsSync(path.join(process.cwd(), "public", assetPath));
}

export function findLogoPath(basePath: string) {
  return (
    supportedLogoExtensions
      .map((extension) => `${basePath}.${extension}`)
      .find((assetPath) => publicAssetExists(assetPath)) ?? null
  );
}
