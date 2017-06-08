import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
    function renderComponent () {
        return shallow(<App />);
    }

    it('should render div with content of "Hello from the React Ecosystem!"', () => {
        expect(renderComponent()).toMatchSnapshot();
    });
});
