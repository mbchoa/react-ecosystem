import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HelloWorld from './HelloWorld';

class App extends Component {
    static childContextTypes = {
        insertCss: PropTypes.func.isRequired
    };

    getChildContext() {
        return {
            insertCss: (...styles) => {
                const removeCssArr = styles.map(x => x._insertCss());
                return () => { removeCssArr.forEach(removeCss => removeCss()); }
            }
        };
    }

    render () {
        return (
            <div>
                <HelloWorld />
            </div>
        );
    }
}

export default App;
