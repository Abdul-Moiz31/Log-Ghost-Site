import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Sibling `Extensions/package-lock.json` + this app: trace from repo root
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
