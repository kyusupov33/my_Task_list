const path = require('path');

module.exports = {
    entry: "./src/app.tsx",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, './build')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },

    module: {
        loaders: [{
            test: /\.tsx$/,
            loader: 'ts-loader',
            options: {
                configFile: 'tsconfig.json'
            }
        }]
    }
};