const Sidebar = require('./sidebar.js')
module.exports = {
  base:'/vuepress/',
  dest: 'vuepress/dist',
  locales: {
    '/': {
      lang: 'zh-cn',
      title: 'JooZh的博客',
      description: 'Vue 驱动的静态站点生成工具'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    displayAllHeaders: true,
    // repo: 'docschina/vuepress',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'JS核心',
            link: '/jscore/',
          },
          {
            text: '宿主环境',
            items: [
              { text: '浏览器 [window]', link: '/browser/' },
              { text: '服务器 [node]', link: '/server/' }
            ]
          },
          {
            text: '网络安全',
            items: [
              { text: 'HTTP协议', link: '/http/' },
              { text: '性能优化', link: '/performance/' },
              { text: '安全防护', link: '/secure/' }
            ]
          },
          {
            text: '框架',
            items: [
              { text: '前端框架', link: '/frame-front/' },
              { text: '后端后端', link: '/frame-back/' }
            ]
          },
          {
            text: '平台',
            items: [
              { text: '微信小程序', link: '/wechat/' },
              { text: '移动端应用', link: '/hybrid/' },
              { text: 'PC客户端应用', link: '/pc/' }
            ]
          },
          {
            text: '数据结构',
            link: '/data-structure/'
          },
          {
            text: '算法',
            link: '/arithmetic/'
          }
        ],
        sidebar: {
          '/jscore/': Sidebar.jscore,
          '/js-mvvm/': Sidebar.jsMvvm
        }
      }
    }
  }
}