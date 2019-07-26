import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner/Spinner';

describe('component: Spinner', () => {
  it('should render correctly', () => {
    shallow(<Spinner />);
  });
});
