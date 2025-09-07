// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended', // базовые правила ESLint
    'plugin:vue/vue3-recommended', // правила для Vue 3
    'plugin:@typescript-eslint/recommended', // правила для TypeScript
    'plugin:prettier/recommended', // интеграция с Prettier
  ],
  parser: 'vue-eslint-parser', // для парсинга .vue файлов
  parserOptions: {
    parser: '@typescript-eslint/parser', // для <script lang="ts">
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // сюда можно добавить свои кастомные правила
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // специфические правила для Vue, если нужно
      },
    },
  ],
};
