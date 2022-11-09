import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/js-with-ts',
  transformIgnorePatterns: ["/node_modules/\\.pnpm/(?!lodash-es)", "\\.pnp\\.[^\\\/]+$"],
  globalSetup: '<rootDir>/jest-global-setup.ts'
};

export default config;
