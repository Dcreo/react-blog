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
    // TODO change to cycle
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
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
