import '@gymapp/styles/globals.css'
import '../styles/globals.css'
// import '../../../packages/styles/src/globals.css'
// import '../../../apps/gym/src/app/globals.css'

const preview = {
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
