// Required for path.join.
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        // Gets the current directory + public.
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // Rule for javascript files.
            {
                // Pipe files to babel-loader for processing.
                loader: 'babel-loader',
                // Include all javascript files.
                test: /\.js$/,
                // Exclude running babel on production javascript i.e. already processed javascript code.
                exclude: /node_modules/
            },
            // Rule for style files.
            {
                test: /\.s?css$/,
                // 'use' allows an array of loaders.
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // Source mapping - identifies line of code where error occurred after asset optimisation/convertion.
    devtool: 'cheap-module-eval-source-map',
    // Similar to live-server but more specific to webpack.
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
