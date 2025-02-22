import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If you're using React
// import vue from '@vitejs/plugin-vue'; // If you're using Vue

export default defineConfig({
  plugins: [
    react(), // Use this if you're using React
    // vue(), // Use this if you're using Vue
  ],
  server: {
   "/api":{
    target:"http://localhost:5000"
   }
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
});