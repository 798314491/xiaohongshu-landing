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

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">{{ messages[currentLang].footer.miniProgram.title }}</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
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