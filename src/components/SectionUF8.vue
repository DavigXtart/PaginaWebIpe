<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const { el: sectionEl, isVisible } = useScrollReveal()

const activeTab = ref('autonomo-sl')

const tabs = [
  { id: 'autonomo-sl', label: 'Autónomo vs SL' },
  { id: 'slne', label: 'SL Nueva Empresa' },
  { id: 'responsabilidad', label: 'Responsabilidad Patrimonial' },
]
</script>

<template>
  <section
    ref="sectionEl"
    id="uf8"
    class="scroll-mt-16 px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    :class="{ 'animate-on-scroll': true, 'is-visible': isVisible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="mb-8 text-center text-2xl font-bold text-white sm:mb-12 sm:text-3xl md:text-4xl">
        Fiscalidad y Legalidad
      </h2>

      <!-- Tabs -->
      <div class="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8">
        <button
          v-for="t in tabs"
          :key="t.id"
          @click="activeTab = t.id"
          :class="[
            'min-h-[44px] min-w-[44px] rounded-xl px-4 py-2.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm',
            activeTab === t.id
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
              : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white',
          ]"
        >
          {{ t.label }}
        </button>
      </div>

      <!-- Contenido por tab -->
      <div class="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-6 md:p-8">
        <!-- Autónomo vs SL -->
        <div v-show="activeTab === 'autonomo-sl'" class="space-y-4 sm:space-y-6">
          <h3 class="text-lg font-semibold text-primary-400 sm:text-xl">Autónomo vs Sociedad Limitada (SL)</h3>
          <div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div class="min-w-0 rounded-xl border border-white/10 bg-slate-800/50 p-4 sm:p-5">
              <h4 class="mb-2 text-sm font-semibold text-white sm:text-base">Autónomo (IRPF)</h4>
<ul class="list-inside list-disc space-y-1 text-justify text-sm text-slate-300 sm:text-base">
              <li>Impuesto sobre la Renta de las Personas Físicas (IRPF)</li>
                <li>Todo el beneficio tributa en la renta personal</li>
                <li>Menor coste de constitución y gestión</li>
                <li>Responsabilidad ilimitada con tu patrimonio</li>
              </ul>
            </div>
            <div class="min-w-0 rounded-xl border border-white/10 bg-slate-800/50 p-4 sm:p-5">
              <h4 class="mb-2 text-sm font-semibold text-white sm:text-base">Sociedad Limitada (Impuesto Sociedades)</h4>
              <ul class="list-inside list-disc space-y-1 text-justify text-sm text-slate-300 sm:text-base">
                <li>Impuesto sobre Sociedades (IS)</li>
                <li>La sociedad tributa por sus beneficios; luego repartes dividendos</li>
                <li>Mayor coste de constitución y obligaciones formales</li>
                <li>Responsabilidad limitada al capital social</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- SLNE -->
        <div v-show="activeTab === 'slne'" class="space-y-4 sm:space-y-6">
          <h3 class="text-lg font-semibold text-primary-400 sm:text-xl">SL Nueva Empresa (SLNE)</h3>
          <p class="text-justify text-sm text-slate-300 leading-relaxed sm:text-base">
            La SL Nueva Empresa es una vía rápida y simplificada para constituir una sociedad limitada en España. Es especialmente útil en el ámbito tech porque reduce trámites y costes iniciales. Permite constituir la sociedad con un capital mínimo y con procedimientos telemáticos, acelerando la puesta en marcha de proyectos digitales.
          </p>
        </div>

        <!-- Responsabilidad Patrimonial -->
        <div v-show="activeTab === 'responsabilidad'" class="space-y-4 sm:space-y-6">
          <h3 class="text-lg font-semibold text-primary-400 sm:text-xl">Responsabilidad Patrimonial</h3>
          <p class="text-justify text-sm text-slate-300 leading-relaxed sm:text-base">
            Cómo proteger tus activos personales: como autónomo respondes con todo tu patrimonio ante deudas de la actividad. Con una SL, la responsabilidad se limita al capital aportado a la sociedad, protegiendo tu vivienda y ahorros personales frente a reclamaciones de la empresa. Es fundamental separar bien las cuentas personales de las de la sociedad y cumplir con las obligaciones formales para que la limitación de responsabilidad sea efectiva.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
