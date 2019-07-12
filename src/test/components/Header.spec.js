import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Header } from '../../components/Header/Header';

describe('component: Header', () => {
  beforeEach(() => {
    sinon.spy(Header.prototype, 'toggle');
  });
  afterEach(() => {
    Header.prototype.toggle.restore();
  });
  it('should render correctly', (done) => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Navbar').hasClass('nav-style')).toBe(true);
    shallow(<Header />);
    done();
  });
  it('should update the isOpen state property to true when navtoggler is clicked', (done) => {
    const wrapper = shallow(<Header />);
    const button = wrapper.find('NavbarToggler');
    button.simulate('click');
    expect(Header.prototype.toggle.calledOnce).toBe(true);
    expect(wrapper.state().isOpen).toBe(true);
    done();
  });
});
