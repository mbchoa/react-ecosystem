import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import commonConfig from './webpack.common';

export default {
    ...commonConfig,
    entry: {
        'bundle': [
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index-template.html'
        }),
    ]
}
