import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from '../../components/UserDetails/UserDetails';


const props = {
  profile: {
    data: {
      id: 1,
      phoneNumber: 3223232,
      dateOfBirth: '12/12/12',
      isEmployed: true,
      yrsOfExperience: 4,
      industry: 'Andela',
      image: 'http://',
      isCertified: false,
    },
  },
  toggleEdit: () => {},
  handleInput: () => {},
  submitProfile: () => {},
};

describe('component: Header', () => {
  it('should render correctly', (done) => {
    shallow(<UserDetails {...props} />);
    done();
  });
});
