import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../views/login';

describe('test Login Page component', () => {
  it('should render Logincomponent correctly', (done) => {
    shallow(<Login />);
    done();
  });
});
