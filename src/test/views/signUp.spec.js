import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { SignUp } from '../../views/Signup/SignUp';

const historyMock = { push: jest.fn() };
const props = {
  registerUser: () => {},
  auth: {},
  errors: {},
};

const setUp = () => {
  const wrapper = shallow(<SignUp {...props} history={historyMock} />);
  return wrapper;
};
describe('Signup component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
    sinon.spy(SignUp.prototype, 'onChange');
    sinon.spy(SignUp.prototype, 'onSubmit');
  });
  afterEach(() => {
    SignUp.prototype.onChange.restore();
    SignUp.prototype.onSubmit.restore();
  });
  it('ensure onchange is called for firstname', (done) => {
    const event = { target: { name: 'firstName', value: 'spam' } };
    const firstName = wrapper
      .find('SignUpForm')
      .shallow()
      .find('#firstname');
    expect(firstName.length).toBe(1);
    firstName.simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
    done();
  });
  it('ensure onchange is called for lastname', (done) => {
    const event = { target: { name: 'lastName', value: 'francisca' } };
    const lastName = wrapper
      .find('SignUpForm')
      .shallow()
      .find('#lastname');
    expect(lastName.length).toBe(1);
    lastName.simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
    done();
  });
  it('ensure onchange is called for userName', (done) => {
    const event = { target: { name: 'userName', value: 'francisca' } };
    const userName = wrapper
      .find('SignUpForm')
      .shallow()
      .find('#username');
    expect(userName.length).toBe(1);
    userName.simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
    done();
  });
  it('ensure onchange is called for email', (done) => {
    const event = { target: { name: 'email', value: 'francis@gmail.com' } };
    const email = wrapper
      .find('SignUpForm')
      .shallow()
      .find('#email');
    expect(email.length).toBe(1);
    email.simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
    done();
  });
  it('ensure onchange is called for password', (done) => {
    const event = { target: { name: 'password', value: 'francisca' } };
    const password = wrapper
      .find('SignUpForm')
      .shallow()
      .find('#password');
    expect(password.length).toBe(1);
    password.simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
    done();
  });
  it('ensure onchange is called for confirmpassword', (done) => {
    const event = { target: { name: 'password', value: 'francisca' } };
    const confirmPassword = wrapper
      .find('SignUpForm')
      .shallow()
      .find('#cpassword');
    expect(confirmPassword.length).toBe(1);
    confirmPassword.simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
    done();
  });

  it('should handle onSubmit', (done) => {
    const fakeEvent = { preventDefault: () => ({}) };
    const submitForm = wrapper
      .find('SignUpForm')
      .shallow()
      .find('.sign-form');
    const btn = wrapper
      .find('SignUpForm')
      .shallow()
      .find('.sign-form');
    expect(submitForm.length).toBe(1);
    expect(btn.length).toBe(1);
    submitForm.simulate('submit', fakeEvent);
    expect(SignUp.prototype.onSubmit.called).toBe(true);
    done();
  });
});
