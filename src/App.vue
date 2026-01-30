<script setup>
// IPE II - Ecosistema Startup (SPA)
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import SectionUF6 from './components/SectionUF6.vue'
import SectionUF7 from './components/SectionUF7.vue'
import SectionUF8 from './components/SectionUF8.vue'
import SectionUF9 from './components/SectionUF9.vue'
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-slate-900">
    <Navbar />
    <main>
      <HeroSection />
      <SectionUF6 />
      <SectionUF7 />
      <SectionUF8 />
      <SectionUF9 />
    </main>
  </div>
</template>
