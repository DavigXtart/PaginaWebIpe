<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const { el: sectionEl, isVisible } = useScrollReveal()

const costesFijos = ref(5000)
const precioSuscripcion = ref(29)
const costeVariableUsuario = ref(5)

const margenPorUsuario = computed(() => {
  const p = Number(precioSuscripcion.value) || 0
  const cv = Number(costeVariableUsuario.value) || 0
  return p - cv
})

const puntoMuerto = computed(() => {
  const cf = Number(costesFijos.value) || 0
  const margen = margenPorUsuario.value
  if (margen <= 0) return null
  return Math.ceil(cf / margen)
})

const esRentable = computed(() => margenPorUsuario.value > 0)
</script>

<template>
  <section
    ref="sectionEl"
    id="uf7"
    class="scroll-mt-16 px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    :class="{ 'animate-on-scroll': true, 'is-visible': isVisible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="mb-8 text-center text-2xl font-bold text-white sm:mb-12 sm:text-3xl md:text-4xl">
        UF7 · Finanzas & Calculadora
      </h2>

      <!-- Calculadora SaaS -->
      <div class="mb-10 min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:mb-16 sm:p-6 md:p-8">
        <h3 class="mb-4 text-lg font-semibold text-primary-400 sm:mb-6 sm:text-xl">
          Calculadora SaaS · Punto Muerto (Umbral de rentabilidad)
        </h3>
        <p class="mb-4 text-justify text-sm text-slate-400 sm:mb-6 sm:text-base">
          Introduce los datos para saber cuántos usuarios necesitas para no perder dinero.
        </p>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <label class="mb-1.5 block text-xs font-medium text-slate-300 sm:mb-2 sm:text-sm">Costes Fijos (€)</label>
            <input
              v-model.number="costesFijos"
              type="number"
              min="0"
              step="100"
              class="w-full min-w-0 rounded-xl border border-white/20 bg-slate-800/80 px-3 py-2.5 text-base text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 sm:px-4 sm:py-3"
              placeholder="5000"
            />
          </div>
          <div>
            <label class="mb-1.5 block text-xs font-medium text-slate-300 sm:mb-2 sm:text-sm">Precio por Suscripción (€)</label>
            <input
              v-model.number="precioSuscripcion"
              type="number"
              min="0"
              step="1"
              class="w-full min-w-0 rounded-xl border border-white/20 bg-slate-800/80 px-3 py-2.5 text-base text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 sm:px-4 sm:py-3"
              placeholder="29"
            />
          </div>
          <div>
            <label class="mb-1.5 block text-xs font-medium text-slate-300 sm:mb-2 sm:text-sm">Coste Variable por Usuario (€)</label>
            <input
              v-model.number="costeVariableUsuario"
              type="number"
              min="0"
              step="0.5"
              class="w-full min-w-0 rounded-xl border border-white/20 bg-slate-800/80 px-3 py-2.5 text-base text-white placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 sm:px-4 sm:py-3"
              placeholder="5"
            />
          </div>
        </div>
        <div class="mt-4 rounded-xl border border-primary-500/30 bg-primary-500/10 p-4 sm:mt-6 sm:p-6">
          <p class="text-xs font-medium text-slate-300 sm:text-sm">Resultado · Punto Muerto</p>
          <p v-if="esRentable && puntoMuerto !== null" class="mt-2 text-base font-bold text-primary-400 sm:text-xl md:text-2xl">
            Necesitas <span class="text-white">{{ puntoMuerto }}</span> usuarios para alcanzar el umbral de rentabilidad.
          </p>
          <p v-else class="mt-2 text-sm text-amber-400 sm:text-base md:text-lg">
            El margen por usuario es insuficiente (precio debe ser mayor que coste variable). Ajusta precios o costes.
          </p>
        </div>
      </div>

      <!-- Tarjetas informativas -->
      <div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <article class="group min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary-500/30 hover:bg-white/10 sm:p-6">
          <h3 class="mb-2 text-base font-semibold text-primary-400 sm:mb-3 sm:text-lg">Balance y Cuenta de Resultados</h3>
          <p class="text-justify text-sm text-slate-300 leading-relaxed sm:text-base">
            En servicios digitales, el Balance refleja activos (software, equipos, caja) y pasivos (deudas, suscripciones pendientes). La Cuenta de Resultados muestra ingresos por suscripciones menos costes operativos y de desarrollo. Es clave interpretar el margen bruto por usuario y el burn rate para planificar la rentabilidad.
          </p>
        </article>
        <article class="group min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary-500/30 hover:bg-white/10 sm:p-6">
          <h3 class="mb-2 text-base font-semibold text-primary-400 sm:mb-3 sm:text-lg">Liquidez vs Solvencia</h3>
          <p class="text-justify text-sm text-slate-300 leading-relaxed sm:text-base">
            La liquidez mide la capacidad de hacer frente a pagos a corto plazo; la solvencia, a largo plazo. En startups de rápido crecimiento el cash-flow es crítico: puedes ser “rentable en papel” pero quedarte sin efectivo si el cobro se retrasa o los costes fijos crecen. Gestionar tesorería y previsiones de caja es esencial.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
