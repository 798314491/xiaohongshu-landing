import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 在应用启动前重置主题
localStorage.removeItem('theme');
document.documentElement.classList.remove('dark');

createApp(App).mount('#app')
