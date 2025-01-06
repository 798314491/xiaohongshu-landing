<template>
  <section id="contact" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          联系我们
        </h2>
        <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          如果您有任何问题或建议，欢迎随时联系我们
        </p>

        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">电子邮件</h3>
                <p class="text-gray-600">support@example.com</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">在线客服</h3>
                <p class="text-gray-600">工作时间：9:00 - 21:00</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-1">微信公众号</h3>
                <p class="text-gray-600">关注获取更多资讯</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <img 
              src="/images/qrcode.png" 
              alt="微信二维码"
              class="w-48 h-48 mx-auto"
              @error="handleQrcodeError"
              v-if="!qrcodeError"
            />
            <div 
              v-else
              class="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center"
            >
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-center mt-4 text-gray-600">扫码关注公众号</p>
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
      qrcodeError: false
    }
  },
  methods: {
    handleQrcodeError() {
      this.qrcodeError = true
    }
  }
}
</script> 