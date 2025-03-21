<script setup>
import { ref, inject } from 'vue'

// 使用 inject 获取当前语言和消息
const currentLang = inject('currentLang')
const messages = inject('messages')

function toggleLanguage() {
  // 切换语言
  const newLang = currentLang.value === 'en' ? 'zh' : 'en'
  currentLang.value = newLang
  
  // 保存到 localStorage
  localStorage.setItem('language', newLang)
  localStorage.setItem('locale', newLang)
  
  // 设置 HTML lang 属性
  document.querySelector('html').setAttribute('lang', newLang)
}
</script>

<template>
  <!-- <button @click="toggleLanguage" class="language-switcher">
    {{ currentLang.value === 'en' ? '中文' : 'English' }}
  </button> -->
</template> 