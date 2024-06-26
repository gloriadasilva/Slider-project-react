import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Slider-project-react',
  build:{
    outDir: 'dist',
  },
  assetsInclude:['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'],
});
