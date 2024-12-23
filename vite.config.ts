import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Set '@' to point to the 'src' directory
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Convierte los nombres de clase automáticamente a camelCase
    },
  },

})
