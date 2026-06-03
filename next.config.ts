import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto (evita la advertencia por lockfiles múltiples)
  turbopack: {
    root: __dirname,
  },
  // Permite previsualizar desde el móvil en la misma red WiFi durante el desarrollo
  allowedDevOrigins: ["192.168.1.128"],
};

export default nextConfig;
