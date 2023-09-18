import { defineUserConfig } from "@vuepress/cli";

export default defineUserConfig({
  title: 'Stnasn9',
  description: 'Blog driven by VuePress',
  base: '/Stnasn9/',
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Tags', link: '/tag/' },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/String10',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2023-present BoS',
        },
      ],
    },
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'posts',
            dirname: '_posts',
            path: '/posts/',
            itemPermalink: '/post/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 5,
            },
          },
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag', 'tags'],
            path: '/tag/',
          },
        ],
      },
    ],
  ],
});
