import type { Config } from 'jest'
import { jestConfig } from '@gymapp/jest-config/jest.config.base'

const config: Config = {
  ...jestConfig,
}

export default config
