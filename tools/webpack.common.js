import path from 'path';

export default {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'isomorphic-style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.css']
    }
}
