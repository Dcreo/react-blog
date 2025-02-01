import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url))
      //'@admin': fileURLToPath(new URL('./src/admin', import.meta.url))
    }
  }
   //resolve: {
    //alias: {
      //'@': path.resolve(__dirname, './src'),
      //'@admin': path.resolve(__dirname, './src/assets'),
      ////'@components': path.resolve(__dirname, './src/components'),
    //},
  //},
  //resolve: {
    //alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  //}
})
