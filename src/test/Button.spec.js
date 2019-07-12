import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('Testing the button component', () => {
  it('should render the button correctly', () => {
    const wrapper = shallow(<Button type="submit" text="Add User" />);
    expect(wrapper.props().children).toEqual('Add User');
  });
});
