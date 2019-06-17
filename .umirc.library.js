export default {
  entry:['src/index.js'],
  esm:"rollup",
  extraBabelPlugins: [
    ['@babel/plugin-proposal-optional-chaining'],
  ],
}
