const path = require('path')

module.exports = {
    mode: "production",
    entry: {
        main: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "webpack-numbers.js",
        libraryTarget: "umd",
        library: "webpackNumbers",
        globalObject: "this"
    },
    externals: {
        "lodash": {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    }
}