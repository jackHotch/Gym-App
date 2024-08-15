/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"  // That one tells Jest to use ts-jest when dealing with TypeScript files
  },
  roots: [
    "src"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  passWithNoTests: true,
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
};

export default config;
