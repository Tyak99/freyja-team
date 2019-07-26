import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../views/Dashboard/Dashboard';

const props = {
  getCourseModules: () => {},
};

describe('component: Dashboard', () => {
  const wrapper = shallow(<Dashboard {...props} />);
  it('should render correctly', (done) => {
    expect(wrapper.find('main').hasClass('d-container')).toBe(true);
    done();
  });
  it('should ensure that home page exists,  and it includes footer components', () => {
    expect(wrapper.find('Footer').exists()).toBe(true);
  });
});
