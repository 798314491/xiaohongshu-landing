// import { createI18n } from 'vue-i18n'
// import en from './en.json'
// import zh from './zh.json'

// 从 localStorage 获取保存的语言设置，如果没有则使用浏览器语言或默认为英文
const savedLocale = localStorage.getItem('locale') || navigator.language.split('-')[0] || 'en'

// 确保语言代码是支持的，否则默认为英文
const locale = ['en', 'zh'].includes(savedLocale) ? savedLocale : 'en'

// 添加语言切换函数，并保存到 localStorage
export function setLocale(locale) {
  localStorage.setItem('locale', locale)
  document.querySelector('html').setAttribute('lang', locale)
}

// 初始化时设置 HTML lang 属性
document.querySelector('html').setAttribute('lang', locale)

// 保持现有的 messages 对象
export const messages = {
  zh: {
    nav: {
      features: '功能特点',
      guide: '使用指南',
      faq: '常见问题'
    },
    hero: {
      title: '轻松下载',
      subtitle: '小红书图片、视频内容',
      description: '一键去水印，高清下载，让分享更加简单',
      buttons: {
        use: '立即使用',
        more: '了解更多'
      }
    },
    features: {
      title: '简单好用的去水印工具',
      subtitle: '专注于为用户提供最便捷的小红书内容下载体验，让分享更加轻松自在',
      download: {
        title: '一键下载',
        desc: '复制笔记链接，即可一键下载无水印内容，方便快捷',
        features: ['支持图文笔记', '支持视频笔记']
      },
      quality: {
        title: '原画质保存',
        desc: '保持原有清晰度，画质无损，让每张图片和视频都完美呈现',
        features: ['高清图片下载', '原画质视频保存']
      },
      share: {
        title: '便捷分享',
        desc: '无水印内容随心分享，支持微信好友和朋友圈分享',
        features: ['微信好友分享', '朋友圈分享']
      }
    },
    faq: {
      title: '常见问题',
      subtitle: '解答您最关心的问题',
      questions: [
        {
          question: '如何使用小程序？',
          answer: '只需要在小红书APP中复制笔记链接，打开小程序后粘贴链接即可一键下载无水印内容。'
        },
        {
          question: '支持下载什么类型的内容？',
          answer: '支持下载小红书的图文笔记和视频笔记，所有内容都保持原画质。'
        },
        {
          question: '下载的内容在哪里？',
          answer: '下载的内容会直接保存到您的手机相册中，可以随时查看和分享。'
        },
        {
          question: '使用有次数限制吗？',
          answer: '目前小程序完全免费使用，无任何次数限制。'
        },
        {
          question: '为什么有时候下载失败？',
          answer: '可能是网络问题或链接失效，建议检查网络连接并确保链接是最新的。如果问题持续，可以联系我们的客服。'
        }
      ]
    },
    contact: {
      title: '联系方式',
      subtitle: '如果您有任何问题或建议，欢迎随时联系我们',
      email: {
        title: '邮箱',
        value: 'qingmu0v0@outlook.com'
      },
      service: {
        title: '客服时间',
        value: '9:00 - 21:00'
      }
    },
    product: {
      title: '产品功能展示',
      subtitle: '简单三步，轻松下载您喜欢的小红书内容',
      steps: [
        {
          title: '复制笔记链接',
          description: '在小红书 App 中点击分享按钮，复制笔记链接'
        },
        {
          title: '打开小程序粘贴',
          description: '在小程序中粘贴已复制的链接'
        },
        {
          title: '一键下载保存',
          description: '点击下载按钮，即可保存无水印内容'
        }
      ],
      features: [
        {
          title: '完全免费使用',
          description: '无需付费，无需注册，打开即用，让分享更简单',
          icon: 'M5 13l4 4L19 7'
        },
        {
          title: '极速下载体验',
          description: '采用先进技术，秒级处理，快速下载',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          title: '安全可靠',
          description: '无需登录账号，保护隐私安全',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        }
      ]
    },
    footer: {
      description: '专注于为用户提供最便捷的小红书内容下载体验',
      quickLinks: {
        title: '快速链接',
        items: [
          { text: '功能特点', href: '#features' },
          { text: '使用指南', href: '#guide' },
          { text: '常见问题', href: '#faq' },
          { text: '联系我们', href: '#contact' }
        ]
      },
      contact: {
        title: '联系方式',
        email: '邮箱：qingmu0v0@outlook.com',
        service: '客服：9:00 - 21:00'
      },
      miniProgram: {
        title: '微信小程序'
      },
      copyright: {
        text: '保留所有权利',
        links: {
          privacy: '隐私政策',
          terms: '服务条款'
        },
        icp: '鄂ICP备2025089336号'
      }
    }
  },
  en: {
    nav: {
      features: 'Features',
      guide: 'Guide',
      faq: 'FAQ'
    },
    hero: {
      title: 'Easy Download',
      subtitle: 'Xiaohongshu Content',
      description: 'One-click watermark removal, HD download, making sharing simple',
      buttons: {
        use: 'Get Started',
        more: 'Learn More'
      }
    },
    features: {
      title: 'Simple & Easy-to-use Tool',
      subtitle: 'Dedicated to providing the most convenient Xiaohongshu content download experience',
      download: {
        title: 'One-click Download',
        desc: 'Copy note link and download watermark-free content instantly',
        features: ['Support Photo Notes', 'Support Video Notes']
      },
      quality: {
        title: 'Original Quality',
        desc: 'Maintain original quality, no quality loss for all photos and videos',
        features: ['HD Photo Download', 'Original Video Quality']
      },
      share: {
        title: 'Easy Sharing',
        desc: 'Share watermark-free content freely with WeChat friends and Moments',
        features: ['Share to Friends', 'Share to Moments']
      }
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Frequently Asked Questions',
      questions: [
        {
          question: 'How to use the mini program?',
          answer: 'Simply copy the note link from Xiaohongshu APP, open the mini program and paste the link to download content without watermark.'
        },
        {
          question: 'What types of content are supported?',
          answer: 'Support downloading Xiaohongshu photo notes and video notes, all content maintains original quality.'
        },
        {
          question: 'Where are the downloaded contents?',
          answer: 'Downloaded content will be saved directly to your phone album, you can view and share anytime.'
        },
        {
          question: 'Is there a usage limit?',
          answer: 'Currently the mini program is completely free to use, with no limitations.'
        },
        {
          question: 'Why does download fail sometimes?',
          answer: 'It might be due to network issues or expired links. Please check your network connection and ensure the link is up to date. If the problem persists, please contact our customer service.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'If you have any questions or suggestions, feel free to contact us',
      email: {
        title: 'Email',
        value: 'qingmu0v0@outlook.com'
      },
      service: {
        title: 'Service Hours',
        value: '9:00 AM - 9:00 PM'
      }
    },
    product: {
      title: 'Product Features',
      subtitle: 'Three simple steps to download Xiaohongshu content',
      steps: [
        {
          title: 'Copy Note Link',
          description: 'Click share button in Xiaohongshu App and copy the note link'
        },
        {
          title: 'Paste in Mini Program',
          description: 'Paste the copied link in the mini program'
        },
        {
          title: 'One-click Download',
          description: 'Click download button to save watermark-free content'
        }
      ],
      features: [
        {
          title: 'Completely Free',
          description: 'No payment needed, no registration required, open and use',
          icon: 'M5 13l4 4L19 7'
        },
        {
          title: 'Lightning Fast',
          description: 'Advanced technology for instant processing and download',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          title: 'Safe & Secure',
          description: 'No login required, protecting your privacy',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        }
      ]
    },
    footer: {
      description: 'Dedicated to providing the most convenient Xiaohongshu content download experience',
      quickLinks: {
        title: 'Quick Links',
        items: [
          { text: 'Features', href: '#features' },
          { text: 'Guide', href: '#guide' },
          { text: 'FAQ', href: '#faq' },
          { text: 'Contact', href: '#contact' }
        ]
      },
      contact: {
        title: 'Contact',
        email: 'Email: qingmu0v0@outlook.com',
        service: 'Service Hours: 9:00 AM - 9:00 PM'
      },
      miniProgram: {
        title: 'WeChat Mini Program'
      },
      copyright: {
        text: 'All Rights Reserved',
        links: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service'
        },
        icp: 'ICP No.2025089336'
      }
    }
  }
} 