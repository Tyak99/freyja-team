import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../components/Sidebar/Sidebar';

describe('component: Header', () => {
  const wrapper = shallow(<Sidebar><hi>Sidebar</hi></Sidebar>);
  it('should render correctly', (done) => {
    expect(wrapper.find('aside').hasClass('aside')).toBe(true);
    done();
  });
});
