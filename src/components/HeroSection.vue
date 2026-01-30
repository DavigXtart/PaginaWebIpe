<script setup>
function scrollToUF6() {
  document.getElementById('uf6')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[80vh] sm:px-6 sm:py-20 md:min-h-[85vh] md:py-24"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-primary-500/5" />
    <div class="relative z-10 mx-auto w-full max-w-4xl text-center">
      <h1
        class="animate-fade-in-up text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        style="animation-delay: 0.1s"
      >
        Creación y Gestión de Startups
      </h1>
      <p
        class="mt-4 animate-fade-in-up text-base text-slate-300 sm:mt-6 sm:text-lg md:text-xl"
        style="animation-delay: 0.3s"
      >
        Financiación, Rentabilidad y Legalidad en el entorno Tech
      </p>
      <div class="mt-8 animate-fade-in-up sm:mt-10" style="animation-delay: 0.5s">
        <button
          @click="scrollToUF6"
          class="min-h-[44px] min-w-[44px] rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:bg-primary-600 hover:shadow-primary-500/40 active:scale-95 sm:px-8 sm:py-3.5 md:hover:scale-105"
        >
          Comenzar
        </button>
      </div>
    </div>
  </section>
</template>
