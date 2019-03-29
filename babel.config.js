const presets = [
  [
      "@babel/preset-env",
      {
          "targets": {
              "browsers": "last 2 versions, > 1%, ie >= 6, Chrome >= 29, Firefox >= 55, Safari >= 9, Android >= 4, iOS >= 9, and_uc > 11",
              "node": "current"
          },
      },
  ],
];
const plugins = [
  "@babel/plugin-transform-runtime",
]
module.exports = { presets, plugins };