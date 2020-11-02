module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'graphql'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json', 'tsconfig.build.json'],
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    'import/ignore': ['\\.coffee$', '\\.(scss|less|css)$', '\\.(svg|png|jpe?g|webp|gif)(\\?.*)?$'],
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
