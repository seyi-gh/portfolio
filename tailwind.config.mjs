/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#131318',
        surface: '#1f1f25',
        primary: '#ddb7ff',
        'primary-container': '#b76dff',
        outline: '#988d9f',
        'on-surface-variant': '#cfc2d6',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Epilogue"', 'sans-serif'],
      },
      maxWidth: {
        'container-max': '1280px',
      }
    },
  },
  plugins: [],
}