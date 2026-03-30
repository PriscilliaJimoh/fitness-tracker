// eslint.config.js
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pkg from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from "globals";
export default defineConfig([
  {
    ignores: ["node_modules/**", "dist/**", ".venv/**/"],
    files: ["**/*.{js,jsx}"],
    languageOptions: {
        globals:{
            ...globals.browser
            },
        },
    plugins: {
      js,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      'unused-imports/no-unused-imports': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  pkg.configs.flat['jsx-runtime'],
  reactHooks.configs.flat["recommended-latest"],
  {
    ...pkg.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
]);