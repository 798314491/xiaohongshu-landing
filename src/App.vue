<template>
  <div id="app" :class="{ 'dark': isDark }">
    <HeroSection @language-change="handleLanguageChange" />
    <FeaturesSection />
    <ProductSection />
    <FaqSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import { ref, provide, onMounted, watch } from 'vue'
import HeroSection from './sections/HeroSection.vue'
import FeaturesSection from './sections/FeaturesSection.vue'
import ProductSection from './sections/ProductSection.vue'
import FaqSection from './sections/FaqSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'
import { messages } from './locales'
import { initTheme, getInitialTheme, resetTheme } from './utils/theme'

export default {
  name: 'App',
  components: {
    HeroSection,
    FeaturesSection,
    ProductSection,
    FaqSection,
    ContactSection,
    FooterSection
  },
  setup() {
    // 重置主题为白天模式（如果需要）
    // 取消注释下一行以在每次加载时重置主题
    // const isDark = ref(resetTheme());
    
    // 或者正常获取主题
    const isDark = ref(getInitialTheme() === 'dark')
    
    const currentLang = ref(localStorage.getItem('language') || localStorage.getItem('locale') || 'zh')

    provide('messages', messages)
    provide('currentLang', currentLang)
    provide('isDark', isDark)

    onMounted(() => {
      // 初始化主题设置
      const darkMode = initTheme()
      isDark.value = darkMode
      
      // 监听存储事件，以便在其他标签页中更改设置时更新
      window.addEventListener('storage', (event) => {
        if (event.key === 'theme') {
          isDark.value = event.newValue === 'dark'
          if (isDark.value) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }
        
        if (event.key === 'language' || event.key === 'locale') {
          currentLang.value = event.newValue
        }
      })
    })

    // 监听 isDark 变化，更新 localStorage 和 DOM
    watch(isDark, (newValue) => {
      localStorage.setItem('theme', newValue ? 'dark' : 'light')
      if (newValue) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })

    return {
      isDark,
      currentLang
    }
  },
  methods: {
    handleLanguageChange(lang) {
      this.currentLang = lang
      localStorage.setItem('language', lang)
      localStorage.setItem('locale', lang)
    },
    // 添加重置主题的方法
    resetThemeToLight() {
      this.isDark = resetTheme()
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}

/* 暗色模式样式 */
.dark {
  color-scheme: dark;
}

.dark body {
  background-color: #1a1a1a;
  color: #ffffff;
}
</style> 