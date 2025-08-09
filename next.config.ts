import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'standalone' // Standalone 모드로 빌드하여 배포 시 종속성 문제 최소화 (운영 배포에 적합한 standalone 출력 방식(용량↓, 스타트업 빠름))
};

export default nextConfig;
