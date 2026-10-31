import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
    js.configs.recommended,
    prettier,
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2020,
                ...globals.node
            }
        },
        plugins: {
            prettier: prettierPlugin
        },
        rules: {
            'prettier/prettier': 'error',
            // Used to demonstrate diff toEqual vs. toStrictEqual
            'no-sparse-arrays': 'off',
            // Some functions have missing implementation for purpose, so that students can practice
            'no-unused-vars': 'off'
        }
    },
    {
        files: ['**/*.test.js'],
        rules: {
            // Allow intentionally undefined variables in test files for teaching purposes
            'no-unassigned-vars': 'off'
        }
    },
    {
        ignores: ['dist/', '.eslintrc.cjs', 'node_modules/', '**/node_modules/', '**/coverage/']
    }
];
