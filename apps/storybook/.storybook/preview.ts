import type { Preview } from '@storybook/react'
import '@gymapp/styles/globals.css'
// import '../src/styles/styles.css'
// import '../../../packages/styles/src/globals.css'
// import '../../gym/src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
