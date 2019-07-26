import React from 'react';
import { shallow } from 'enzyme';
import Community from '../../components/Community/Community';
import store from '../../../store';

describe('test community component', () => {
  it('should render component', () => {
    const comm = shallow(<Community store={store} />);
    expect(comm).toMatchSnapshot();
  });
});
