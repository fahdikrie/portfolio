module.exports = {
  // default prettier config
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    'prettier-plugin-tailwindcss',
  ],

  // @trivago/prettier-plugin-sort-imports config
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
