<template>
  <section id="contact" class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">
          {{ messages[currentLang].contact.title }}
        </h3>
        <p class="text-gray-600 text-center mb-8">
          {{ messages[currentLang].contact.subtitle }}
        </p>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="flex items-center space-x-4">
            <div class="bg-red-100 dark:bg-red-900 p-3 rounded-full">
              <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">{{ messages[currentLang].contact.email.title }}</h3>
              <p class="text-gray-600">{{ messages[currentLang].contact.email.value }}</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="bg-red-100 dark:bg-red-900 p-3 rounded-full">
              <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">{{ messages[currentLang].contact.service.title }}</h3>
              <p class="text-gray-600">{{ messages[currentLang].contact.service.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'ContactSection',
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