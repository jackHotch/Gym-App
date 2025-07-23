import { theme } from '@gymapp/styles/theme'
const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, '../../**/*.{js,ts,jsx,tsx}'), // all packages + apps
    path.join(__dirname, './**/*.{js,ts,jsx,tsx}'), // local files just in case
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/gymui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...theme.extend,
    },
  },
  plugins: [],
}
