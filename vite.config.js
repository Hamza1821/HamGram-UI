import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import corsMidleware from './corsMidleware'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy:{
      '/api':"http://localhost:8080"
    },
    middleware: [
      corsMidleware
    ]
  }
})




