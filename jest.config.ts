import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/**/*.ts';
const baseTestDir = '<rootDir>/src/tests';
 
const config: Config.InitialOptions = {
  preset: 'ts-jest', 
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  roots: ['<rootDir>/tests'],
  setupFiles: ['<rootDir>/tests/setup.ts'],
    collectCoverageFrom: [
      `${baseDir}/**/*.ts`, '!**/node_modules/**'
    ],

}

export default config;