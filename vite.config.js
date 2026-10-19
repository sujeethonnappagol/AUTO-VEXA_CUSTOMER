import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const role = ['admin', 'vendor', 'customer'].includes(mode) ? mode : '';
  return {
  plugins: [react()],
  define: { 'import.meta.env.VITE_DASHBOARD_ROLE': JSON.stringify(role) },
  server: { host: '0.0.0.0' },
  build: {
    outDir: role ? `dist/${role}` : 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three/')) return 'three-vendor';
          if (id.includes('/node_modules/recharts/')) return 'charts-vendor';
          if (id.includes('/node_modules/@reduxjs/') || id.includes('/node_modules/react-redux/') || id.includes('/node_modules/redux/')) return 'state-vendor';
          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) return 'react-vendor';
        },
      },
    },
  },
  };
});
