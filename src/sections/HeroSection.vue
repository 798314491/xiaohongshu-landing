<template>
  <section class="min-h-screen relative overflow-hidden bg-gradient-to-b from-red-50 to-white">
    <!-- 顶部导航 -->
    <nav :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    ]">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="/images/logo.png" alt="logo" class="w-8 h-8" @error="handleLogoError" v-if="!logoError" />
          <div v-else class="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center text-white font-bold">
            小
          </div>
          <span class="text-xl font-bold" :class="scrolled ? 'text-red-500' : 'text-gray-800'">小红书去水印</span>
        </div>
        <!-- 修改导航链接样式 -->
        <div class="hidden md:flex space-x-1">
          <a 
            v-for="(item, index) in navItems" 
            :key="index"
            :href="item.href"
            :class="[
              'px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium',
              scrolled 
                ? 'text-gray-600 hover:text-red-500 hover:bg-red-50' 
                : 'text-gray-700 hover:text-gray-900 hover:bg-white/30'
            ]"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ item.text }}
          </a>
        </div>
        <!-- 移动端菜单按钮 -->
        <button 
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="scrolled ? 'hover:bg-red-50 text-gray-600 hover:text-red-500' : 'hover:bg-white/30 text-gray-700 hover:text-gray-900'"
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
            {{ item.text }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero区域 -->
    <div class="container mx-auto px-4 pt-32 pb-20">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 space-y-6">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900">
            轻松下载<br/>
            <span class="text-red-500">小红书视频图文</span>
          </h1>
          <p class="text-lg text-gray-600">
            一键去水印，高清下载，支持批量保存，让分享更加简单
          </p>
          <div class="flex space-x-4">
            <button class="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
              立即使用
            </button>
            <button class="border border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-50 transition-colors">
              了解更多
            </button>
          </div>
        </div>
        <div class="md:w-1/2 mt-10 md:mt-0">
          <div class="relative">
            <img src="/images/mockup.png" alt="演示" class="w-full max-w-md mx-auto" @error="handleMockupError" v-show="!mockupError" />
            <!-- 添加占位内容 -->
            <!-- <div v-if="mockupError" class="w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-red-50 to-pink-50 rounded-lg flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 text-red-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div> -->
            <!-- 添加浮动动画元素 -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-red-100 rounded-full animate-float"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-100 rounded-full animate-float-delay"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      logoError: false,
      mockupError: false,
      scrolled: false,
      mobileMenuOpen: false,
      navItems: [
        { text: '功能特点', href: '#features' },
        { text: '使用指南', href: '#guide' },
        { text: '常见问题', href: '#faq' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
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
        const offset = 80 // 导航栏高度加一些额外空间
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
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
</style> 