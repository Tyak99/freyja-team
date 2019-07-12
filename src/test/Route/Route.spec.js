import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/routes';

describe('test Route component', () => {
  it('should render Route component correctly', (done) => {
    shallow(<Routes />);
    done();
  });
});
