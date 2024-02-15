import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from '@emotion/react';`,
  },
  resolve: {
    alias: {
      '@emotion/react': resolve(__dirname, './node_modules/@emotion/react'),
      '@emotion/styled': resolve(__dirname, './node_modules/@emotion/styled'),
    },
  },
  optimizeDeps: {
    include: ['@chakra-ui/icons'],
  },
});