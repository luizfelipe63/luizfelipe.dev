/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        "gradient-hero": "var(--gradiant, linear-gradient(169deg, #3060FF 0%, #10299F 100%))"
      },
      colors:{
        blue:{
          50: '#e8f4ff',
          100: '#d5eaff',
          200: '#b3d6ff',
          300: '#86b8ff',
          400: '#568cff',
          500: '#3060ff',
          600: '#0d31ff',
          700: '#0325ff',
          800: '#0724cc',
          900: '#10299f',
          950: "#040926"
        },
        gray:{
          50: "#f6f6f7",
          100: "#efeff0",
          200: "#e1e2e4",
          300: "#cecfd3",
          400: "#b9bac0",
          500: "#a1a1aa",
          600: "#91919a",
          700: "#7d7d85",
          800: "#66666d",
          900: "#55555a",
          950: "#323234",
        }
      }
    },
  },
  plugins: [],
}
