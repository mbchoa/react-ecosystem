import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './HelloWorld.css';

export const HelloWorld = (props, context) =>
    <div className={s.hello}>
        Hello from React Ecosystem!
    </div>

export default withStyles(s)(HelloWorld);
