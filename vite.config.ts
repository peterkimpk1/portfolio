import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist'
    },
    base: '/'
  };

  if (command === 'serve') {
    config.base = '/';
  } else {
    config.base = '/portfolio/';
  }

  return config;
});