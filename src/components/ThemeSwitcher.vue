<script setup>
import { ref, onMounted } from 'vue'
import { getInitialTheme, setTheme } from '../utils/theme'

const currentTheme = ref('light')

onMounted(() => {
  currentTheme.value = getInitialTheme()
})

function toggleTheme() {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  currentTheme.value = newTheme
}
</script>

<template>
  <!-- <button @click="toggleTheme" class="theme-switcher">
    <span v-if="currentTheme === 'light'">🌙</span>
    <span v-else>☀️</span>
  </button> -->
</template> 