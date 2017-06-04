import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Html extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render () {
        const { children } = this.props;

        return (
            <html>
                <head>
                    <title>React Ecosystem</title>
                </head>
                <body>
                    { children }
                    <script src="bundle.js"></script>
                </body>
            </html>
        )
    }
}
