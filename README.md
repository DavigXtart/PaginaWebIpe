# IPE II - Ecosistema Startup

SPA educativa sobre creación y gestión de startups: financiación, rentabilidad y legalidad en el entorno tech.

## Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite**
- **Tailwind CSS**

## Estructura

```
src/
├── main.js
├── App.vue
├── index.css
├── components/
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── SectionUF6.vue   # Fuentes de Financiación
│   ├── SectionUF7.vue   # Finanzas & Calculadora SaaS
│   ├── SectionUF8.vue   # Fiscalidad y Legalidad
│   └── SectionUF9.vue   # Trámites Administrativos
└── composables/
    └── useScrollReveal.js
```

## Ejecución

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Build

```bash
npm run build
npm run preview
