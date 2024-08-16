export const jestConfig = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  roots: [
    "src"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  passWithNoTests: true,
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
}