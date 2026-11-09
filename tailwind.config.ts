import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090C",
        surface: "#101217",
        surfaceSubtle: "#161922",
        surfaceBorder: "rgba(255, 255, 255, 0.08)",
        surfaceBorderHover: "rgba(255, 255, 255, 0.16)",
        brand: {
          50: "#EEF4FF",
          100: "#D9E5FF",
          200: "#B8D1FF",
          300: "#85B3FF",
          400: "#4B8CFF",
          500: "#0055F6", // Primary Apple/MorphDoc Blue
          600: "#0043C7",
          700: "#00349E",
          800: "#00297B",
          900: "#001F5C",
        },
        apple: {
          gray: "#86868B",
          dark: "#1D1D1F",
          light: "#F5F5F7",
          green: "#30D158",
          blue: "#2997FF",
          red: "#FF453A",
          orange: "#FF9F0A",
          yellow: "#FFD60A",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(0, 85, 246, 0.3)",
        glowLg: "0 0 60px -10px rgba(0, 85, 246, 0.4)",
        macWindow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;

