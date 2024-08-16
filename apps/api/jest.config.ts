import { jestConfig } from "@gymapp/jest-config/jest.config.base"
import type { Config } from 'jest';

const config: Config = {
  ...jestConfig,
  collectCoverage: true,
  coverageDirectory: "coverage",
};

export default config;
