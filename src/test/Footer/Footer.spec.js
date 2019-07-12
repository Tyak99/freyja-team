import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';

describe('Footer component should be rendered', () => {
  const footerComponent = shallow(<Footer />);

  it('should contain a footer element', () => {
    expect(footerComponent.find('footer').exists()).toBe(true);
  });
  it('should contain a footer-container div', () => {
    expect(footerComponent.find('footer.footer-container').exists()).toBe(true);
  });

  it('should contain a p child element', () => {
    expect(footerComponent.find('footer > nav').exists()).toBe(true);
    expect(footerComponent.find('nav').length).toBe(1);
  });
});
