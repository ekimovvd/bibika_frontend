export default {
  head: {
    title: "bibika",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",
      },
    ],
  },

  css: ["~/assets/styles/main.scss", "boxicons/css/boxicons.min.css"],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: ["@nuxtjs/axios", "@/modules/home/index.ts"],

  axios: {
    baseURL: "/",
  },
};
