import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { TestQuestions } from '../../views/ModuleTest/ModuleTest';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({ test: {} });
const props = {
  getModuleTest: () => {},
  isLoading: true,
  store,
  match: { params: { moduleId: '4' } },
};

const setUp = () => {
  const component = shallow(<TestQuestions {...props} />);
  return component;
};
describe('Question component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
    sinon.spy(TestQuestions.prototype, 'handleChange');
  });
  afterEach(() => {
    TestQuestions.prototype.handleChange.restore();
  });
  it('should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('ensure onchange is called for TestQuestions', (done) => {
    const event = { target: { name: 4, value: 'customer' } };
    const questions = component.find('TestQuestions');
    expect(questions.length).toBe(1);
    questions.simulate('change', event);
    expect(TestQuestions.prototype.handleChange.called).toBe(true);
    done();
  });
});
