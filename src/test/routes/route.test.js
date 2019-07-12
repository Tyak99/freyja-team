/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/routes';

describe('test Landing Page component', () => {
  it('should render Route component correctly', (done) => {
    shallow(<Routes />);
    done();
  });
});
