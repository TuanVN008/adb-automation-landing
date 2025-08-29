import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "grid-tech":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)"
      }
    }
  },
  plugins: []
} satisfies Config;
