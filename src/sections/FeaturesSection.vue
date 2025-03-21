<template>
  <section id="features" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        {{ messages[currentLang].features.title }}
      </h2>
      <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
        {{ messages[currentLang].features.subtitle }}
      </p>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="feature-card dark:bg-gray-800 dark:text-white">
          <div class="icon-wrapper">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ messages[currentLang].features.download.title }}</h3>
          <p class="text-gray-600">{{ messages[currentLang].features.download.desc }}</p>
          <ul class="mt-4 text-gray-500 space-y-2">
            <li v-for="(feature, idx) in messages[currentLang].features.download.features" 
              :key="idx" 
              class="flex items-center"
            >
              <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="feature-card dark:bg-gray-800 dark:text-white">
          <div class="icon-wrapper">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ messages[currentLang].features.quality.title }}</h3>
          <p class="text-gray-600">{{ messages[currentLang].features.quality.desc }}</p>
          <ul class="mt-4 text-gray-500 space-y-2">
            <li v-for="(feature, idx) in messages[currentLang].features.quality.features" 
              :key="idx" 
              class="flex items-center"
            >
              <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="feature-card dark:bg-gray-800 dark:text-white">
          <div class="icon-wrapper">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ messages[currentLang].features.share.title }}</h3>
          <p class="text-gray-600">{{ messages[currentLang].features.share.desc }}</p>
          <ul class="mt-4 text-gray-500 space-y-2">
            <li v-for="(feature, idx) in messages[currentLang].features.share.features" 
              :key="idx" 
              class="flex items-center"
            >
              <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>

      <!-- 添加使用数据统计 -->
      <div class="grid md:grid-cols-4 gap-8 mt-20">
        <div class="text-center">
          <div class="text-3xl font-bold text-red-500 mb-2">1万+</div>
          <div class="text-gray-600">{{ currentLang === 'zh' ? '累计用户' : 'Total Users' }}</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-red-500 mb-2">98%</div>
          <div class="text-gray-600">{{ currentLang === 'zh' ? '好评率' : 'Satisfaction Rate' }}</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-red-500 mb-2">10万+</div>
          <div class="text-gray-600">{{ currentLang === 'zh' ? '成功下载' : 'Downloads' }}</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-red-500 mb-2">18h</div>
          <div class="text-gray-600">{{ currentLang === 'zh' ? '在线服务' : 'Online Service' }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'FeaturesSection',
  setup() {
    const messages = inject('messages')
    const currentLang = inject('currentLang')

    return {
      messages,
      currentLang
    }
  }
}
</script>

<style scoped>
.feature-card {
  @apply p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300;
}

.icon-wrapper {
  @apply w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4;
}

.feature-card:hover .icon-wrapper {
  @apply bg-red-200 transform scale-110 transition-all duration-300;
}
</style> 