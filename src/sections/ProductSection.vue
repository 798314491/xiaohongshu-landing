<template>
  <section id="product" class="relative py-24 overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full filter blur-3xl opacity-30"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        {{ messages[currentLang].product.title }}
      </h2>
      <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
        {{ messages[currentLang].product.subtitle }}
      </p>

      <!-- 步骤展示 -->
      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <div v-for="(step, index) in messages[currentLang].product.steps" 
          :key="index" 
          class="step-card group"
        >
          <div class="step-number">{{ index + 1 }}</div>
          <div class="relative w-full rounded-lg mb-4 overflow-hidden">
            <img
              :src="`/images/step${index + 1}.png`"
              :alt="step.title"
              class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
              @error="handleImageError($event, index)"
              v-show="!imageErrors[index]"
            />
            <!-- 图片加载失败时显示的占位动画 -->
            <div v-if="imageErrors[index]" class="w-full h-full bg-gradient-to-r from-red-50 to-pink-50 animate-pulse">
              <div class="h-full flex items-center justify-center">
                <svg class="w-12 h-12 text-red-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
          <p class="text-gray-600">{{ step.description }}</p>
        </div>
      </div>

      <!-- 产品特色展示 -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div v-for="(feature, index) in messages[currentLang].product.features" 
            :key="index" 
            class="feature-item"
          >
            <h3 class="text-2xl font-semibold mb-4 flex items-center">
              <span class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                </svg>
              </span>
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 ml-13">{{ feature.description }}</p>
          </div>
        </div>
        <div class="relative">
          <div class="relative w-full rounded-lg overflow-hidden">
            <img
              src="/images/preview.png"
              alt="产品预览"
              class="w-full h-auto rounded-lg shadow-2xl"
              @error="handlePreviewImageError"
              v-show="!previewImageError"
            />
            <!-- 预览图加载失败时显示的占位动画 -->
            <div v-if="previewImageError" class="w-full aspect-[4/3] bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-2xl">
              <div class="h-full flex items-center justify-center">
                <div class="text-center">
                  <svg class="w-16 h-16 text-red-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span class="text-red-400">小程序预览</span>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute -right-4 -bottom-4 w-full h-full border-1 rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'ProductSection',
  setup() {
    const messages = inject('messages')
    const currentLang = inject('currentLang')
    const imageErrors = ref([false, false, false])
    const previewImageError = ref(false)

    const handleImageError = (event, index) => {
      imageErrors.value[index] = true
    }

    const handlePreviewImageError = () => {
      previewImageError.value = true
    }

    return {
      messages,
      currentLang,
      imageErrors,
      previewImageError,
      handleImageError,
      handlePreviewImageError
    }
  }
}
</script>

<style scoped>
.step-card {
  @apply relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg;
}

.step-number {
  @apply absolute -top-4 -right-4 w-12 h-12 rounded-full bg-red-500 text-white 
         flex items-center justify-center text-xl font-bold;
}

.bg-grid-pattern {
  background-image: linear-gradient(90deg, rgba(255,0,0,.1) 1px, transparent 1px),
                    linear-gradient(rgba(255,0,0,.1) 1px, transparent 1px);
  background-size: 20px 20px;
  @apply dark:opacity-10;
}

.ml-13 {
  margin-left: 3.25rem;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(-25%); }
  50% { transform: translateY(0); }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.step-card img {
  height: auto; /* 确保图片高度自适应 */
}
</style> 