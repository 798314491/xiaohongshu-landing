<template>
  <section class="min-h-screen relative overflow-hidden bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
    <!-- 顶部导航 -->
    <nav :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    ]">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="/images/logo.png" alt="logo" class="w-8 h-8" @error="handleLogoError" v-if="!logoError" />
          <div v-else class="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center text-white font-bold">
            小
          </div>
          <span class="text-xl font-bold" :class="scrolled ? 'text-red-500' : 'text-gray-800 dark:text-gray-100'">
            {{ currentLang === 'zh' ? '小红薯无水印图片下载' : 'Xiaohongshu Downloader' }}
          </span>
        </div>
        <!-- 修改导航链接样式 -->
        <div class="flex items-center space-x-4">
          <div class="hidden md:flex space-x-1">
            <a 
              v-for="(item, index) in navItems" 
              :key="index"
              :href="item.href"
              :class="[
                'px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium',
                scrolled 
                  ? 'text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-white/30 dark:hover:bg-gray-800'
              ]"
              @click.prevent="scrollToSection(item.href)"
            >
              {{ messages[currentLang].nav[item.key] }}
            </a>
          </div>

          <!-- 语言切换按钮 -->
          <button 
            :class="[
              'px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium',
              scrolled 
                ? 'text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-red-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white' 
                : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-white/30 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
            ]"
            @click="toggleLanguage"
          >
            {{ currentLang === 'zh' ? 'EN' : '中' }}
          </button>

          <!-- 主题切换按钮 -->
          <button 
            :class="[
              'px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium',
              scrolled 
                ? 'text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-red-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white' 
                : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-white/30 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
            ]"
            @click="toggleTheme"
          >
            <!-- 月亮图标 - 暗色模式 -->
            <svg 
              v-if="!isDark"
              class="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <!-- 太阳图标 - 亮色模式 -->
            <svg 
              v-else
              class="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </div>
        <!-- 移动端菜单按钮 -->
        <button 
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="scrolled 
            ? 'hover:bg-red-50 text-gray-600 hover:text-red-500 dark:hover:bg-red-900/30' 
            : 'hover:bg-white/30 text-gray-700 hover:text-gray-900 dark:hover:bg-gray-800'"
          @click="toggleMobileMenu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <div 
        v-show="mobileMenuOpen"
        class="md:hidden absolute w-full bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300"
      >
        <div class="container mx-auto px-4 py-4">
          <a 
            v-for="(item, index) in navItems" 
            :key="index"
            :href="item.href"
            class="block py-3 text-gray-600 hover:text-red-500 border-b border-gray-100 last:border-0"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ messages[currentLang].nav[item.key] }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero区域 -->
    <div class="container mx-auto px-4 pt-32 pb-20">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 space-y-6">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900">
            {{ messages[currentLang].hero.title }}<br/>
            <span class="text-red-500">{{ messages[currentLang].hero.subtitle }}</span>
          </h1>
          <p class="text-lg text-gray-600">
            {{ messages[currentLang].hero.description }}
          </p>
          <div class="flex space-x-4">
            <button 
              class="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
              @click="scrollToSection('#product')"
            >
              {{ messages[currentLang].hero.buttons.use }}
            </button>
            <button 
              class="border border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
              @click="scrollToSection('#features')"
            >
              {{ messages[currentLang].hero.buttons.more }}
            </button>
          </div>
        </div>
        <div class="md:w-1/2 mt-10 md:mt-0">
          <div class="relative">
            <Vue3Lottie
              :animationData="globeAnimation"
              :height="700"
              :width="600"
              :loop="true"
              :autoPlay="true"
            />
            <!-- 装饰性光晕 -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-red-500/5 dark:bg-red-400/5 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/5 dark:bg-red-400/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="controls">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  </section>
</template>

<script>
import { inject } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import globeAnimation from '../assets/globe-animation.json'
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

export default {
  name: 'HeroSection',
  components: {
    Vue3Lottie,
    ThemeSwitcher,
    LanguageSwitcher
  },
  setup() {
    const messages = inject('messages')
    const currentLang = inject('currentLang')

    return {
      messages,
      currentLang,
      globeAnimation
    }
  },
  data() {
    return {
      logoError: false,
      mockupError: false,
      scrolled: false,
      mobileMenuOpen: false,
      navItems: [
        { key: 'features', href: '#features' },
        { key: 'guide', href: '#product' },
        { key: 'faq', href: '#faq' }
      ],
      isDark: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    
    // 从 localStorage 获取主题设置
    const theme = localStorage.getItem('theme') || 'light'
    this.isDark = theme === 'dark'
    
    // 确保 DOM 与状态一致
    if (this.isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleLogoError() {
      this.logoError = true
    },
    handleMockupError() {
      this.mockupError = true
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    scrollToSection(href) {
      this.mobileMenuOpen = false
      const element = document.querySelector(href)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark')
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },
    toggleLanguage() {
      const newLang = this.currentLang === 'zh' ? 'en' : 'zh'
      this.$emit('language-change', newLang)
    }
  }
}
</script>

<style scoped>
/* 添加平滑滚动效果 */
:root {
  scroll-behavior: smooth;
}

/* 导航链接激活状态 */
.router-link-active {
  @apply text-red-500 bg-red-50;
}

/* 导航栏滚动时的效果 */
.nav-scrolled {
  @apply shadow-md bg-white/90;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 3s ease-in-out infinite;
  animation-delay: 1.5s;
}

.wave {
  transform-origin: center;
  animation: wave 3s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* 添加渐变效果 */
.gradient-mask {
  mask-image: radial-gradient(circle at center, black, transparent);
}

.earth-grid {
  transform-origin: center;
}

.meteor {
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* 添加星星闪烁动画 */
@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

.stars circle {
  animation: twinkle 2s ease-in-out infinite;
}

/* 添加轨道旋转动画 */
@keyframes orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.earth-orbits {
  animation: orbit 20s linear infinite;
}
</style> 