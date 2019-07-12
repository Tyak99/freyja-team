import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import InputField from '../../components/inputs/input';

const setUp = (props = {}) => {
  const component = shallow(<InputField {...props} type="text" placeholder="Last name" name="lastName" />);
  return component;
};
describe('InputField component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
