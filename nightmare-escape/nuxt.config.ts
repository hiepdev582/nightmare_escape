import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000/api/v1",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@ant-design-vue/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "nuxt-security",
  ],
  app: {
    head: {
      title: "Nightmare Escape - Solo Board Game | hiepnn",
    },
  },
  css: ["~/assets/styles/index.css"],
  // Cấu hình cho Ant Design Vue
  antd: {
    extractStyle: true,
  },
  // Cấu hình tối ưu cho Nuxt Image - Ưu tiên xuất ảnh ra định dạng siêu nhẹ
  image: {
    format: ["webp", "avif"],
  },
  // Cấu hình bảo mật cơ bản cho Nuxt Security
  security: {
    headers: {
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "blob:",
          "http://localhost:8000",
          "https://*",
        ],
        "connect-src": ["'self'", "http://localhost:8000"],
      },
    },
    corsHandler: {
      origin: ["http://localhost:8000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  },
  components: [
    { path: "~/components/base", prefix: "Base", pathPrefix: false },
    { path: "~/components/layout", prefix: "App", pathPrefix: false },
    { path: "~/components/others", prefix: "App", pathPrefix: false },
  ],
  imports: {
    dirs: ["~/constants/*.ts"],
  },
});
