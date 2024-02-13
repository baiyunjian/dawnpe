import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: "zh-CN", 
  title: "用户文档",
  titleTemplate: 'DawnPE Docs', 
  description: "操作简单|功能强大|兼容性强的全新PE工具箱",
  head: [
    ['meta', { name: 'keywords', content: 'DawnPE,破晓PE,PE,维护系统,晨云网络' }], 
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://dawnpe.com/image/favicon.ico' }]
  ],
  themeConfig: {
    logo: 'https://i.imgtg.com/2023/08/01/OnbM1C.png', 
    
    siteTitle: 'DawnPE Docs', 
    
    docFooter:{ prev: '上一篇', next: '下一篇' },

    nav: [
      { text: '首页', link: '/', activeMatch: '/' }, 
      { text: '更新', link: '/guide/update' }, 
      { text: '赞助', link: '/guide/donate' }, 
      { text: '授权', link: '/cooperate/empower' }, 
      { text: '博客', link: 'https://blog.dawnpe.com/' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '前言', link: '/start' },
        ]
      }, 
      {
        text: '总述',
        items: [
          { text: '更新', link: '/guide/update' },
          { text: '协议', link: '/guide/agreement' },
          { text: '鸣谢', link: '/guide/thank' },
          { text: '赞助', link: '/guide/donate' },
        ]
      }, 
      {
        text: 'Q&A',
        items: [
          { text: 'PE是什么？', link: '/question/what' },
          { text: 'DawnPE特殊之处？', link: '/question/special' },
          { text: 'PE制作失败？', link: '/question/makefail' },
          { text: 'PE启动失败？', link: '/question/bootfail' },
          { text: 'PE没有网络？', link: '/question/nonetwork' },
          { text: 'PE内核选择？', link: '/question/kernel' },
        ]
      }, 
      {
        text: '教程',
        items: [
          { text: '制作或升级DawnPE启动盘？', link: '/course/startup' },
          { text: '将DawnPE安装到本地？', link: '/course/local' },
          { text: '在Ventoy内使用DawnPE？', link: '/course/ventoy' },
          { text: '使用UltraISO制作启动盘？', link: '/course/ultraiso' },
          { text: '在电脑上启动DawnPE？', link: '/course/boot' },
          { text: '使用内置的应用商店？', link: '/course/appstore' }
        ]
      }, 
      {
        text: 'DIY',
        items: [
          { text: '开发须知', link: '/customize/know' },
          { text: '语言命令', link: '/customize/command' },
          { text: '添加驱动', link: '/customize/adddrive' },
          { text: '添加软件', link: '/customize/addsoft' },
          { text: '壁纸修改', link: '/customize/backmod' },
        ]
      }, 
      {
        text: '合作',
        items: [
          { text: '获取授权', link: '/cooperate/empower' },
        ]
      }, 
    ],

    socialLinks: [
      { icon: 'slack', link: 'https://blog.dawnpe.com/' }
    ], 
    
    footer: {
       message: 'Powered By VitePress, Supported By 白云间&安全引导.',
       copyright: 'CopyRight © 2020-Present ChenYun Network.', 
    }
  }
})