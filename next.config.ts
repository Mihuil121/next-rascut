import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'], // Разрешенные домены для загрузки изображений
  },
  // Вы можете добавить другие параметры конфигурации здесь
};

export default nextConfig;
