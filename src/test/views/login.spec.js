import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Login } from '../../views/Login/Login';
import { loginUser } from '../../../store/actions/authActions';

function shallowSetup() {
  const props = {
    auth: {
      isAuthenticated: false,
      isLoading: false,
      user: {},
      errors: {
        error: 'Invalid Login Credentials',
      },
    },
    loginUser,
  };
  const enzymeWrapper = shallow(<Login {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Login component', () => {
  it('should render login correctly', () => {
    const { enzymeWrapper } = shallowSetup();
    expect(enzymeWrapper).toMatchSnapshot();
    expect(enzymeWrapper.find('#form-feedback').text()).toBe('Invalid Login Credentials');
  });
});

describe('Login component methods', () => {
  beforeEach(() => {
    sinon.spy(Login.prototype, 'handleChange');
    sinon.spy(Login.prototype, 'handleSubmit');
  });

  afterEach(() => {
    Login.prototype.handleChange.restore();
    Login.prototype.handleSubmit.restore();
  });

  it('should call handlechange ', () => {
    const { enzymeWrapper } = shallowSetup();

    const emailInput = enzymeWrapper.find('InputField').first();
    emailInput.simulate('change', {
      target: {
        value: 'davidchizindu@gmail.com',
        name: 'email',
      },
    });
    expect(enzymeWrapper.state().email).toEqual('davidchizindu@gmail.com');
    expect(Login.prototype.handleChange.calledOnce).toBe(true);
  });

  it('should call handlesubmit', () => {
    const { enzymeWrapper } = shallowSetup();
    enzymeWrapper.setState({
      email: 'davidchizindu@gmail.com',
      password: '11111111',
      validationErrors: {},
    });

    const form = enzymeWrapper.find('#form');
    const mockedEvent = {
      target: {},
      preventDefault: () => ({}),
    };

    form.simulate('submit', mockedEvent);
    expect(Login.prototype.handleSubmit.calledOnce).toBe(true);
  });

  it('should handle validation after form is submitted', () => {
    const { enzymeWrapper } = shallowSetup();
    enzymeWrapper.setState({
      email: '',
      password: '',
      validationErrors: {},
    });

    const form = enzymeWrapper.find('#form');
    const mockedEvent = {
      target: {},
      preventDefault: () => ({}),
    };

    form.simulate('submit', mockedEvent);
    expect(Login.prototype.handleSubmit.calledOnce).toBe(true);
  });
});
