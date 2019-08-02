import React from 'react';
import { shallow } from 'enzyme';
import TestQuestions from '../../components/Questions/Questions';

const setUp = (props = {}) => {
  const component = shallow(<TestQuestions {...props} />);
  return component;
};
describe('Question component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
});
