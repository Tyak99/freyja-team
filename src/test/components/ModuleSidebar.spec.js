import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModuleSidebar from '../../components/ModuleSidebar';

describe('Component: ModuleSidebar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ModuleSidebar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
