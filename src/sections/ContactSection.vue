<template>
  <section id="contact" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      

      <div class="max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">其他联系方式</h3>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="flex items-center space-x-4">
            <div class="bg-red-100 p-3 rounded-full">
              <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">邮箱</h3>
              <p class="text-gray-600">qingmu0v0@outlook.com</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="bg-red-100 p-3 rounded-full">
              <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">客服时间</h3>
              <p class="text-gray-600">9:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      qrError: false
    }
  },
  methods: {
    handleQrError() {
      this.qrError = true
    }
  }
}
</script> 