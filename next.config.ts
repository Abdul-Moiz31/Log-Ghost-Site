import type { NextConfig } from "next";

/**
 * Vercel / standalone: repo root = this app. No `outputFileTracingRoot` to parent
 * (that was for the local monorepo with a second package-lock in the parent folder).
 */
const nextConfig: NextConfig = {};

export default nextConfig;
