import { build } from 'vite'
import config from './vite.config.js'

try {
  await build(config)
  console.log('Vite build completed successfully.')
} catch (err) {
  console.error('Vite build failed:', err)
  process.exit(1)
}
