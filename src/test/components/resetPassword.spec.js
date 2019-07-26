import React from 'react';
import { shallow } from 'enzyme';
import { ResetPasswordCard } from '../../components/ResetPassword/ResetPassword';
import store from '../../../store';

let ResetPassword;

describe('Reset password component', () => {
  it('should render correctly the reset password component', () => {
    ResetPassword = shallow(<ResetPasswordCard store={store} />);
    expect(ResetPassword).toMatchSnapshot();
  });
});
