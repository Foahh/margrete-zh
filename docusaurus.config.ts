import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import searchLocal, { PluginOptions } from "@easyops-cn/docusaurus-search-local";

const config: Config = {
  title: "Margrete 中文",
  tagline: "",
  favicon: "img/favicon.ico",

  url: "http://localhost:3000",
  baseUrl: "/",

  organizationName: "Foahh",
  projectName: "margrete-zh-next",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        size: 1024,
        disableInDev: false,
      },
    ],
    ["vercel-analytics", {}],
  ],

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      searchLocal,
      {
        hashed: true,
        language: ["en", "zh"],
        searchBarShortcut: false,
        searchBarShortcutHint: false,
      } satisfies PluginOptions,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Margrete 中文",
      logo: {
        alt: "Margrete",
        src: "img/favicon.ico",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "margreteSidebar",
          position: "left",
          label: "Margrete",
        },
        {
          type: "docSidebar",
          sidebarId: "umiguriSidebar",
          position: "left",
          label: "UMIGURI",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: "https://umgr.inonote.jp/download",
          position: "right",
          label: "下载 UMIGURI",
        },
        {
          to: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=vsMprVebJ4PS-PDhHOyga7c0TDdLKqDc&authKey=eCMiKDj2bPf446M2TsTz3X9ffjcJudpSsa%2B1oqnL%2BynjH3I1Zj3j54rLV%2B40dv%2B1&noverify=0&group_code=863841531",
          position: "right",
          label: "QQ 交流群",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
