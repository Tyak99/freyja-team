import React from 'react';
import { shallow } from 'enzyme';
import ChangePassword from '../../../views/ChangePassword/changePassword';


describe('reser password page', () => {
  it('should render correctly Reset password page', () => {
    const ResetPassword = shallow(<ChangePassword />);
    expect(ResetPassword).toMatchSnapshot();
  });
});
