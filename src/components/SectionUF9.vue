<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { el: sectionEl, isVisible } = useScrollReveal()

const steps = [
  {
    title: 'Alta Censal',
    desc: 'Modelos 036/037 para darse de alta en Hacienda y en el censo de empresarios. El 036 es el censo general; el 037 para el IAE y obligaciones fiscales. Es el primer paso administrativo para operar legalmente.',
  },
  {
    title: 'Gestión Documental',
    desc: 'Facturas digitales y firma electrónica. Digitalizar facturación y contratos con firma electrónica reduce costes y acelera la operativa, esencial en startups tech y equipos remotos.',
  },
  {
    title: 'Local y Personal',
    desc: 'Licencias de ayuntamiento (si aplica actividad en local) y alta en Seguridad Social para trabajadores, incluidos remotos. Gestionar altas, bajas y cotizaciones correctamente desde el inicio.',
  },
]
</script>

<template>
  <section
    ref="sectionEl"
    id="uf9"
    class="scroll-mt-16 px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    :class="{ 'animate-on-scroll': true, 'is-visible': isVisible }"
  >
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-8 text-center text-2xl font-bold text-white sm:mb-12 sm:text-3xl md:text-4xl">
        UF9 · Trámites Administrativos
      </h2>

      <!-- Timeline vertical -->
      <div class="relative min-w-0">
        <!-- Línea vertical -->
        <div
          class="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-500 to-primary-500/50 sm:left-6 md:left-8"
          aria-hidden="true"
        />

        <ul class="space-y-6 sm:space-y-10">
          <li
            v-for="(step, i) in steps"
            :key="step.title"
            class="relative flex gap-4 sm:gap-6 md:gap-8"
          >
            <!-- Punto -->
            <div
              class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-500 bg-slate-900 text-xs font-bold text-primary-400 sm:h-12 sm:w-12 sm:text-sm md:h-14 md:w-14"
            >
              {{ i + 1 }}
            </div>
            <!-- Contenido -->
            <article
              class="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary-500/30 hover:bg-white/10 sm:p-5 md:p-6"
            >
              <h3 class="mb-1.5 text-base font-semibold text-primary-400 sm:mb-2 sm:text-lg">
                {{ step.title }}
              </h3>
              <p class="text-justify text-sm text-slate-300 leading-relaxed sm:text-base">
                {{ step.desc }}
              </p>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
