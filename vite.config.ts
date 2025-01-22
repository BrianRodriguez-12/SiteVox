import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '',
  server: {
    proxy: {
      '/api': 'https://mi-backend.onrender.com', // URL del backend
    },
  },
});
