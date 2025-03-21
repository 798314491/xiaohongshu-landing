<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="/images/logo.png" alt="logo" class="w-8 h-8" @error="handleLogoError" v-if="!logoError" />
            <div v-else class="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center text-white font-bold">
              小
            </div>
            <span class="text-xl font-bold text-white">
              {{ currentLang === 'zh' ? '小红薯无水印图片下载' : 'Xiaohongshu Downloader' }}
            </span>
          </div>
          <p class="text-sm">
            {{ messages[currentLang].footer.description }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">{{ messages[currentLang].footer.quickLinks.title }}</h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in messages[currentLang].footer.quickLinks.items" :key="index">
              <a :href="link.href" class="hover:text-red-400 transition-colors">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">{{ messages[currentLang].footer.contact.title }}</h3>
          <ul class="space-y-2">
            <li>{{ messages[currentLang].footer.contact.email }}</li>
            <li>{{ messages[currentLang].footer.contact.service }}</li>
          </ul>
        </div>

        
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8">
        <p class="text-center text-sm">
          © {{ new Date().getFullYear() }} {{ currentLang === 'zh' ? '小红薯无水印图片下载' : 'Xiaohongshu Downloader' }}. 
          {{ messages[currentLang].footer.copyright.text }}
          <span class="mx-2">|</span>
          <a href="#" class="hover:text-red-400 transition-colors">{{ messages[currentLang].footer.copyright.links.privacy }}</a>
          <span class="mx-2">|</span>
          <a href="#" class="hover:text-red-400 transition-colors">{{ messages[currentLang].footer.copyright.links.terms }}</a>
          <span class="mx-2">|</span>
          {{ messages[currentLang].footer.copyright.icp }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'FooterSection',
  setup() {
    const messages = inject('messages')
    const currentLang = inject('currentLang')
    const logoError = ref(false)

    const handleLogoError = () => {
      logoError.value = true
    }

    return {
      messages,
      currentLang,
      logoError,
      handleLogoError
    }
  }
}
</script>

<style>
.footer-content p {
  font-size: 12px;
  color: #666;
}
</style> 