import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'rise': 'rise 2s ease-out forwards',
        'float-up': 'floatUp 20s linear infinite',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '50%': { opacity: '0.7' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
