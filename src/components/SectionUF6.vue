<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { el: sectionEl, isVisible } = useScrollReveal()

const cards = [
  {
    title: 'Business Angels',
    text: 'Se trata generalmente de empresarios que se dedican a invertir e impulsar el desarrollo de proyectos que consideran que tienen un alto potencial de crecimiento en sus primeras etapas de vida. Ejemplos: Amazon, Skype, Starbucks o Google.',
  },
  {
    title: 'Venture Builders',
    text: 'Concepto novedoso llamado company builder o fábricas de startups. Son emprendedores exitosos que invierten en nuevas startups adaptando modelos internacionales al ámbito local. Funciones: Identificar proyectos, formar equipos, encontrar financiación y brindar servicios de apoyo.',
  },
  {
    title: 'Crowdfunding',
    text: 'Sistema de financiación colectiva a través de plataformas online. Pequeñas aportaciones financian un proyecto. Tipos: empresariales, solidarios, políticos, etc. Se clasifican según la contraprestación al inversor.',
  },
]
</script>

<template>
  <section
    ref="sectionEl"
    id="uf6"
    class="scroll-mt-16 px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    :class="{ 'animate-on-scroll': true, 'is-visible': isVisible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="mb-8 text-center text-2xl font-bold text-white sm:mb-12 sm:text-3xl md:text-4xl">
        UF6 · Fuentes de Financiación
      </h2>
      <div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        <article
          v-for="(card, i) in cards"
          :key="card.title"
          class="group min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-primary-500/5 sm:p-6"
          :style="{ animationDelay: `${i * 0.1}s` }"
        >
          <h3 class="mb-2 text-lg font-semibold text-primary-400 sm:mb-3 sm:text-xl">
            {{ card.title }}
          </h3>
          <p class="text-justify text-sm text-slate-300 leading-relaxed sm:text-base">
            {{ card.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
