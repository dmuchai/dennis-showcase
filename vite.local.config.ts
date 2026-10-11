// Local preview fallback for Windows environments where SWC's native cache is unavailable.
import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  esbuild: { jsx: "automatic" },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  server: { host: "127.0.0.1", port: 8080 },
});
