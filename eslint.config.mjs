/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react';
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
  pluginReactConfig.configs.flat.recommended,
  pluginReactConfig.configs.flat['jsx-runtime'],
  {
    plugins: { i18next },
    rules: {
      'i18next/no-literal-string': ['error', { mode: 'jsx-text-only' }],
    },
  },
  // ...compat.extends('standard-with-typescript'),
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
    },
  },
];
