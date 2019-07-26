import React from 'react';
import { shallow } from 'enzyme';
import { ChangePassword } from '../../../components/ChangePassword/ChangePassword';
import store from '../../../../store';

let ResetPassword;

describe('Reset password component', () => {
  it('should render correctly the reset password component', () => {
    ResetPassword = shallow(<ChangePassword store={store} />);
    expect(ResetPassword).toMatchSnapshot();
  });
});
