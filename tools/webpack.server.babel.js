import path from 'path';

import commonConfig from './webpack.common';

export default {
    ...commonConfig,
    target: 'node',
    entry: './src/server.js',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'server.js'
    },
    node: {
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    }
}
