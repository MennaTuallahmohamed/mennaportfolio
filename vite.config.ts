import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : "",  // 🔥 احذف المسار المخصص لـ GitHub Pages
  server: {
    host: true,
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
}));
