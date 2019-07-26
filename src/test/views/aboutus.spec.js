import React from 'react';
import { shallow } from 'enzyme';

import toJson from 'enzyme-to-json';
import About from '../../views/AboutUs/AboutUs';

describe('Aboutus component', () => {
  const wrapper = shallow(<About />);
  it('should render without errors', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
