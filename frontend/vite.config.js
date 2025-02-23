import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    "/api": {
      target: "http://localhost:5000",
    },
  },
  build: {
    outDir: "dist",
  },
});
