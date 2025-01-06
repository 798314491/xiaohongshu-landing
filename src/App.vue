<template>
  <div id="app">
    <HeroSection />
    <FeaturesSection />
    <ProductSection />
    <FaqSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import HeroSection from './sections/HeroSection.vue'
import FeaturesSection from './sections/FeaturesSection.vue'
import ProductSection from './sections/ProductSection.vue'
import FaqSection from './sections/FaqSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    FeaturesSection,
    ProductSection,
    FaqSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}
</style> 