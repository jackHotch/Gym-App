import type { Config } from 'jest'
import { jestConfig } from '@gymapp/jest-config/jest.config.base'

const config: Config = {
  ...jestConfig,
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
}

export default config
