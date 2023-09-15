module.exports = {
  title: 'Stnasn9',
  description: 'Blog driven by VuePress',
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'REfs',
        items: [
          { text: 'Github', link: 'https://github.com/String10' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'DUMMy',
        path: '/',
        collapsable: false,
        children: [
          { title: "FirstBlog", path: "/FIrstBlog" }
        ]
      },
      {
        title: "SecondBlog",
        path: '/dummy/SecondBlog',
        collapsable: false,
        children: [
          { title: "another", path: "/dummy/ThirrdBlog" },
        ],
      }
    ]
  }
}
