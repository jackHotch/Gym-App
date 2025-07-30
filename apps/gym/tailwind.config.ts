// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: ['./src/**/*.{ts,tsx}'],
//   plugins: [],
// }

// export default config
import { theme } from '@gymapp/styles/theme'
const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, '../../**/*.{js,ts,jsx,tsx}'), // all packages + apps
    path.join(__dirname, './**/*.{js,ts,jsx,tsx}'), // local files just in case
    '../../packages/**/*.{js,ts,jsx,tsx}',
    '../**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...theme.extend,
    },
  },
  plugins: [],
}

// import sharedConfig from '@gymapp/styles/tailwind'

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   ...sharedConfig,
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}', // own files
//     '../../packages/ui/src/**/*.{js,ts,jsx,tsx}', // UI components
//     '../../packages/styles/**/*.{css,ts}',
//   ],
// }
