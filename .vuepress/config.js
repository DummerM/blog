module.exports = {
  "title": "心方方",
  "description": "心方方的秘密花园",
  "dest": "public",
  plugins: [
    [
      "vuepress-plugin-live2d",
      {
        "modelName": "hijiki",
        "mobileShow": false,
        position: "right"
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://www.xingfangfang.com'
      }
    ]
  ],
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/avatar.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "心方方，前端笔记，在线撸猫，心方方的秘密花园"
      }
    ],
    [
      "meta",
      {
        "name": "baidu-site-verification",
        "content": "code-UUkiJPbrl5"
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
      appId: 'aNqtyUdaOznWHNyzqOJeQ4gH-gzGzoHsz',// your appId
      appKey: 'zzM0u3RkVYsHKkAtqTvB9t5w', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "文档",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "联系方式",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/DummerM/DummerM.github.io",
            "icon": "reco-github"
          }
        ]
      }
    ],
    subSidebar: 'auto',
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "类别"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xinfangfang",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true,
    externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' }
  }
}