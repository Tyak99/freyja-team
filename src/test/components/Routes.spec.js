import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/routes';

describe('component: Routes', () => {
  it('should render correctly', () => {
    shallow(<Routes />);
  });
});
