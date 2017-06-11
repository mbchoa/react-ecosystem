import React from 'react';
import { shallow } from 'enzyme';

import { HelloWorld } from '../HelloWorld';

describe('HelloWorld', () => {
    function renderComponent() {
        return shallow(<HelloWorld />);
    }

    it('should render HelloWorld', () => {
        expect(renderComponent()).toMatchSnapshot();
    })
});
