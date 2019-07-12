import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ExampleForm from '../../components/inputs/exampleForm';

const setUp = (props = {}) => {
  const component = shallow(<ExampleForm {...props} type="text" placeholder="Last name" name="lastName" />);
  return component;
};
describe('ExampleForm component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
