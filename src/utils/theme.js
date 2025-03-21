// 新文件: 主题管理工具

// 获取保存的主题或使用系统偏好
export function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    return savedTheme
  }
  
  // 如果没有保存的主题，检查系统偏好
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  
  return 'light'
}

// 设置主题并保存到 localStorage
export function setTheme(theme) {
  localStorage.setItem('theme', theme)
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// 初始化主题
export function initTheme() {
  const theme = getInitialTheme()
  setTheme(theme)
  return theme === 'dark'
}

// 重置主题为白天模式
export function resetTheme() {
  localStorage.removeItem('theme')
  document.documentElement.classList.remove('dark')
  return false
} 