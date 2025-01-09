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
import { ref, provide } from 'vue'
import HeroSection from './sections/HeroSection.vue'
import FeaturesSection from './sections/FeaturesSection.vue'
import ProductSection from './sections/ProductSection.vue'
import FaqSection from './sections/FaqSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'
import { messages } from './locales'

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
    const isDark = ref(false)
    const currentLang = ref(localStorage.getItem('language') || 'zh')

    provide('messages', messages)
    provide('currentLang', currentLang)

    return {
      isDark,
      currentLang
    }
  },
  methods: {
    handleLanguageChange(lang) {
      this.currentLang = lang
      localStorage.setItem('language', lang)
    }
  },
  mounted() {
    this.isDark = document.documentElement.classList.contains('dark')
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