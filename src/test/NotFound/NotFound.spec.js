import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../views/NotFound';

describe('test Not Found Page component', () => {
  it('should render NotFound component correctly', (done) => {
    shallow(<NotFound />);
    done();
  });
});
