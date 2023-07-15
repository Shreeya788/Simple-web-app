import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import css from "vite-plugin-css"; // Import the vite-plugin-css

export default defineConfig({
  plugins: [
    react(),
    css(), // Add the vite-plugin-css as a plugin
  ],
  optimizeDeps: {
    include: ["bootstrap"],
  },
});
