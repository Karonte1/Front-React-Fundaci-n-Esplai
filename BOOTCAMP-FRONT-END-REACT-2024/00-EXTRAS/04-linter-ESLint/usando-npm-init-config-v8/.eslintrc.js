module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // semi: 'off'
    semi: ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'padded-blocks': ['error', 'always']
  }
};
