// eslint.config.js
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pkg from "eslint-plugin-react";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
    },
  },
  {
    ...pkg.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);

// const reactPlugin = require('eslint-plugin-react');
//
// module.exports = [
//   …
//   reactPlugin.configs.flat.recommended, // This is not a plugin object, but a shareable config object
//       reactPlugin.configs.flat['jsx-runtime'], // Add this if you are using React 17+
// …
// ];
