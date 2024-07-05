module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module' // Add this line
    },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    overrides: [
        {
            // Turn of some errors
            files: ['./**/*.js', './**/*.js'],
            rules: {
                // Used to demonstrate diff toEqual vs. toStrictEqual
                'no-sparse-arrays': 'off',

                // Some functions have missing implementation for purpose, so that students can practice
                'no-unused-vars': 'off'
            }
        }
    ]
};
