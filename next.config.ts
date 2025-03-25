import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/product',
        permanent: true, // ถ้าต้องการทำ redirect แบบถาวร
      },
    ];
  },

  // config options อื่น ๆ ที่คุณต้องการ
};

export default nextConfig;
