export default () => (
    {
        entry: './index.js',
        output: {
            path: './dist',
            filename: 'webpack-numbers.js',
            libraryTarget: 'umd',
            library: 'webpackNumbers'
        },
        externals: {
            'lodash': {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_'
            }
        },
        module: {
            rules: [{
                test: /.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
                options: {
                    presets: ['es2015-webpack']
                }
            }, {
                test: /.json$/,
                exclude: /node_modules/,
                use: 'json-loader'
            }]
        }
    }
);