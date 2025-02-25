import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],


  // alias @
  resolve: {
    alias: {
      "@components": path.resolve( __dirname, "src/components" ),
      "@pages": path.resolve( __dirname, "src/pages" ),
      "@assets": path.resolve( __dirname, "src/assets" ),
      "@hooks": path.resolve( __dirname, "src/hooks" ),
      "@layouts": path.resolve( __dirname, "src/layouts" ),
      "@css": path.resolve( __dirname, "src/assets/css" ),
      "@slices": path.resolve( __dirname, "src/slices" ),
      "@store": path.resolve( __dirname, "src/store" ),
      "@sections": path.resolve( __dirname, "src/sections" ),
      "@utils": path.resolve( __dirname, "src/utils" ),
      "@routes": path.resolve( __dirname, "src/routes" ),
    },
  },
})
