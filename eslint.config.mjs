/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import globals from 'globals';
import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import i18next from 'eslint-plugin-i18next';

import path from 'path';
import { fileURLToPath } from 'url';
// import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: pluginJs.configs.recommended,
// });

export default [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    plugins: { i18next, jest },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
  // ...compat.extends('standard-with-typescript'),
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest },
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
    },
    rules: {
      'react/prop-types': 0,
      semi: 2,
    },
  },
  {
    files: ['**/src/**/*.(ts,tsx)'],
    ignores: ['**/src/**/*.test.(ts,tsx)'],
    rules: {
      'i18next/no-literal-string': ['error', { mode: 'jsx-text-only' }],
    },
  },
];
