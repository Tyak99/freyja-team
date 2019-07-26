import React from 'react';
import { shallow } from 'enzyme';
import VerifyUser from '../../views/VerifyUser/verifyUser';

describe('test verify user page', () => {
  const verify = shallow(<VerifyUser />);

  it('should test verify user page', () => {
    expect(verify).toMatchSnapshot();
  });
});
