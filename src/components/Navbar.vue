<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'uf6', label: 'Financiación' },
  { id: 'uf7', label: 'Finanzas' },
  { id: 'uf8', label: 'Fiscalidad' },
  { id: 'uf9', label: 'Trámites' },
]

function scrollTo(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function closeOnResize() {
  if (window.innerWidth >= 768) menuOpen.value = false
}

function closeOnEscape(e) {
  if (e.key === 'Escape') menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', closeOnResize)
  window.addEventListener('keydown', closeOnEscape)
})
onUnmounted(() => {
  window.removeEventListener('resize', closeOnResize)
  window.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
  <nav
    class="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur-xl transition-all duration-300"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      <span class="text-base font-semibold text-white sm:text-lg">Ecosistema Startup</span>

      <!-- Desktop: enlaces visibles -->
      <ul class="hidden items-center gap-1 md:flex md:gap-4">
        <li v-for="s in sections" :key="s.id">
          <button
            @click="scrollTo(s.id)"
            class="rounded-lg px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-primary-500 sm:px-3"
          >
            {{ s.label }}
          </button>
        </li>
      </ul>

      <!-- Mobile: botón hamburguesa -->
      <button
        type="button"
        @click="menuOpen = !menuOpen"
        class="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
        aria-label="Abrir o cerrar menú"
        aria-expanded="menuOpen"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            v-if="!menuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile: menú desplegable -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="menuOpen"
        class="border-t border-white/10 bg-slate-900/95 px-4 py-4 backdrop-blur-xl md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="s in sections" :key="s.id">
            <button
              @click="scrollTo(s.id)"
              class="w-full rounded-lg px-4 py-3 text-left text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-primary-500"
            >
              {{ s.label }}
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
