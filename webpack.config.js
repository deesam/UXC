const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/index.ts'),
    devtool: 'inline-source-map',
    output: {
        filename: 'app.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'uxc.js',
        path: path.resolve(__dirname, 'build'),
        library: 'uxcenter',
        libraryTarget: 'var',
      }
};