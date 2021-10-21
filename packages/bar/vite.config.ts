import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { a } from '@monorepo/foo'

console.log({ a })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
