import clientConfig from './webpack.client.babel';

export default {
    ...clientConfig,
    entry: {
        'bundle': [
            'react-hot-loader/patch',
            ...clientConfig.entry.bundle
        ]
    }
}
