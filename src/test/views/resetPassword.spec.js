import React from 'react';
import { shallow } from 'enzyme';
import ResetPasswordCard from '../../views/ResetPassword/ResetPassword';
// import store from '../../../store';

describe('reser password page', () => {
  it('should render correctly Reset password page', () => {
    const ResetPassword = shallow(<ResetPasswordCard />);
    expect(ResetPassword).toMatchSnapshot();
  });
});
