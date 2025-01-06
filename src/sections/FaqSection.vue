<template>
  <section id="faq" class="py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        常见问题
      </h2>
      <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
        解答您最关心的问题
      </p>

      <div class="max-w-3xl mx-auto space-y-6">
        <div v-for="(faq, index) in faqs" :key="index" 
          class="bg-white rounded-xl shadow-sm overflow-hidden">
          <button 
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
            @click="toggleFaq(index)"
          >
            <span class="text-lg font-medium">{{ faq.question }}</span>
            <svg 
              class="w-6 h-6 text-gray-400 transform transition-transform duration-200"
              :class="{ 'rotate-180': faq.isOpen }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="faq.isOpen"
            class="px-6 py-4 border-t border-gray-100"
          >
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      faqs: [
        {
          question: '如何使用小程序？',
          answer: '只需要在小红书APP中复制笔记链接，打开小程序后粘贴链接即可一键下载无水印内容。',
          isOpen: true
        },
        {
          question: '支持下载什么类型的内容？',
          answer: '支持下载小红书的图文笔记和视频笔记，所有内容都保持原画质。',
          isOpen: false
        },
        {
          question: '下载的内容在哪里？',
          answer: '下载的内容会直接保存到您的手机相册中，可以随时查看和分享。',
          isOpen: false
        },
        {
          question: '使用有次数限制吗？',
          answer: '目前小程序完全免费使用，无任何次数限制。',
          isOpen: false
        },
        {
          question: '为什么有时候下载失败？',
          answer: '可能是网络问题或链接失效，建议检查网络连接并确保链接是最新的。如果问题持续，可以联系我们的客服。',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script> 