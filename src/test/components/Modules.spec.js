import React from 'react';
import { shallow } from 'enzyme';
import Modules from '../../components/Modules/Modules';


describe('component: Modules', () => {
  const wrapper = shallow(<Modules />);
  it('should render correctly', (done) => {
    expect(wrapper.find('div.m-container').exists()).toBe(true);
    done();
  });
  test('should render modules component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
