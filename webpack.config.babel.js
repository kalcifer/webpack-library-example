export default () => (
    {
        entry: './index.js',
        output: {
            path: './dist',
            filename: 'nmTransalate.js',
            libraryTarget: 'umd',
            library: 'nmTransalate'
        },
        externals:{
            '_' : 'lodash'
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