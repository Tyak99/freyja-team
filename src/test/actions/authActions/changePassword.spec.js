import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';

import { ChangePassword } from '../../../components/ChangePassword/ChangePassword';
import * as actions from '../../../../store/actions/authActions/changePassword';

describe('test methods', () => {
  sinon.spy(ChangePassword.prototype, 'handleSubmit');
  sinon.spy(ChangePassword.prototype, 'handleInput');

  function shallowSetup() {
    const props = {
      changePassword: actions.ChangePassword('december', 'ddhbjhjdhujsaddd'),
      loading: true,
      passwordchangeSuccess: 'please check you email',
      passwordChangeError: 'invalid email',
      location: { search: 'ddd' },
    };

    const enzymeWrapper = shallow(<ChangePassword {...props} />);

    return {
      props,
      enzymeWrapper,
    };
  }

  describe('Test change Password methods', () => {
    let wrapper;
    beforeEach(() => {
      const { enzymeWrapper } = shallowSetup();
      wrapper = enzymeWrapper;
    });

    it('should test a method', () => {
      const button = wrapper.find('Button');

      button.simulate('click');
      expect(ChangePassword.prototype.handleSubmit.calledOnce).toBe(true);
    });

    it('should test first input method', () => {
      const input = wrapper.find('InputField').first();
      const mockedEvent = { target: {} };

      input.simulate('change', mockedEvent);
      expect(ChangePassword.prototype.handleInput.called).toBe(true);
    });

    it('should test the second input', () => {
      const input = wrapper.find('InputField').at(1);
      const mockedEvent = { target: {} };

      input.simulate('change', mockedEvent);
      expect(ChangePassword.prototype.handleInput.called).toBe(true);
    });
    it('should test', async () => {
      wrapper.setState({
        password: 'december',
        confirmPassword: 'december',
      });

      const button = wrapper.find('Button');

      button.simulate('click');

      expect(ChangePassword.prototype.handleSubmit.called).toBe(true);
      await actions.ChangePassword;
    });

    it('should test', () => {
      wrapper.setState({
        password: 'decem',
        confirmPassword: 'december',
      });
      const button = wrapper.find('Button');

      button.simulate('click');

      expect(ChangePassword.prototype.handleSubmit.called).toBe(true);
    });
  });
});
