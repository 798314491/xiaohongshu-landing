<template>
  <section id="faq" class="py-24 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        {{ messages[currentLang].faq.title }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        {{ messages[currentLang].faq.subtitle }}
      </p>

      <div class="max-w-3xl mx-auto space-y-6">
        <div v-for="(faq, index) in messages[currentLang].faq.questions" 
          :key="index" 
          class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
        >
          <button 
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
            @click="toggleFaq(index)"
          >
            <span class="text-lg font-medium">{{ faq.question }}</span>
            <svg 
              class="w-6 h-6 text-gray-400 transform transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="openIndex === index"
            class="px-6 py-4 border-t border-gray-100 dark:border-gray-700"
          >
            <p class="text-gray-600 dark:text-gray-300">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'FaqSection',
  setup() {
    const messages = inject('messages')
    const currentLang = inject('currentLang')
    const openIndex = ref(0)

    const toggleFaq = (index) => {
      openIndex.value = openIndex.value === index ? -1 : index
    }

    return {
      messages,
      currentLang,
      openIndex,
      toggleFaq
    }
  }
}
</script> 