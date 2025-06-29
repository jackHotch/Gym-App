// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: ['./src/**/*.{ts,tsx}'],
//   plugins: [],
// }

// export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-400': 'var(--color-primary-400)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'primary-300': 'var(--color-primary-300)',
        danger: 'var(--color-danger)',
        'danger-light': 'var(--color-danger-light)',
        'danger-dark': 'var(--color-danger-dark)',
        success: 'var(--color-success)',
        'success-dark': 'var(--color-success-dark)',
        'light-gray': 'var(--color-light-gray)',
        'dark-gray': 'var(--color-dark-gray)',
        'text-gray': 'var(--color-text-gray)',
      },
      boxShadow: {
        custom: 'var(--shadow-primary)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto-Sans', 'sans-serif'],
        kenyan: ['Kenyan-Coffee', 'sans-serif'],
        // Add others like League Spartan or Poppins if needed
      },
    },
  },
  plugins: [],
}
