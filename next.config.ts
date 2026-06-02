import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto (evita la advertencia por lockfiles múltiples)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
