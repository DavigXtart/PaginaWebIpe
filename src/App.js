import { h } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import SectionUF6 from './components/SectionUF6.vue'
import SectionUF7 from './components/SectionUF7.vue'
import SectionUF8 from './components/SectionUF8.vue'
import SectionUF9 from './components/SectionUF9.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    SectionUF6,
    SectionUF7,
    SectionUF8,
    SectionUF9,
  },
  render() {
    return h('div', { class: 'min-h-screen overflow-x-hidden bg-slate-900' }, [
      h(Navbar),
      h('main', [
        h(HeroSection),
        h(SectionUF6),
        h(SectionUF7),
        h(SectionUF8),
        h(SectionUF9),
      ]),
    ])
  },
}
