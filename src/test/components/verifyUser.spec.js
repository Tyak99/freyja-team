import React from 'react';
import { shallow } from 'enzyme';
import { VerifyUser } from '../../components/VerifyUser/VerifyUser';
import store from '../../../store';

describe('test verify user component', () => {
  const prop = {
    verifyAuth: () => {},
    location: {
      search: '',
    },
    verified: 'hello, mobolaji',
  };
  const verify = shallow(<VerifyUser {...prop} store={store} />);

  it('should test verify', () => {
    expect(verify).toMatchSnapshot();
  });
});
