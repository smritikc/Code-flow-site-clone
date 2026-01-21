import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  // Add this esbuild configuration
  esbuild: {
    css: {
      minify: true,
      // Suppress the specific warning
      supported: {
        // This tells ESBuild to treat 'transform' as a known property
        'css-transform': true
      }
    }
  }
})