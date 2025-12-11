import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
export default defineConfig({
  // ...other settings
  base: "/Netflix-Clone-2025/", // <-- This is the key fix
  // ...other settings
});
