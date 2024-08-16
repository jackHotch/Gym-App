import type { Config } from 'jest';
import { jestConfig } from "@gymapp/jest-config/jest.config.base"

const config: Config = {
  ...jestConfig,
  collectCoverage: true,
  coverageDirectory: "coverage",
};

export default config;
