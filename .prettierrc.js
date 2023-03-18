module.exports = {
  // default prettier config
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  // @trivago/prettier-plugin-sort-imports config
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
};
