import type { Config } from 'jest';

const config: Config = {
  preset: 'solid-jest/preset/browser',
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@testing-library/jest-dom/extend-expect',
  ],
};

export default config;
