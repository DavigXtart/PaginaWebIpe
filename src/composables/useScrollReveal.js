import { onMounted, ref } from 'vue'

export function useScrollReveal(options = {}) {
  const el = ref(null)
  const isVisible = ref(false)
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options

  onMounted(() => {
    if (!el.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) isVisible.value = true
      },
      { threshold, rootMargin }
    )
    observer.observe(el.value)
    return () => observer.disconnect()
  })

  return { el, isVisible }
}
