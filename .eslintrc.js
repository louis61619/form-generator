module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    // 'react-hooks/exhaustive-deps': 'off'
  },
};
