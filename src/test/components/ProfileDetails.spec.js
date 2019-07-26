import React from 'react';
import { shallow } from 'enzyme';
import ProfileDetails from '../../views/Profile/ProfileDetails';

const props = {
  profile: {
    image: 'http',
    socialMedia: [
      { name: 'facebook', url: 'http/' },
      { name: 'twitter', url: '/thpp' },
    ],
    email: 'tunde@mail.com',
    bio: 'A good man',
    name: 'Tyak',
  },
  uploadImage: () => {},
  imageFile: {
    current: {},
  },
  loading: false,
};

const wrapper = shallow(<ProfileDetails {...props} />);
describe('component: ProfileDetails', () => {
  it('renders correctly', (done) => {
    shallow(<ProfileDetails {...props} />);
    done();
  });
  it('tests to find the upload Icon and the input type file', (done) => {
    const icon = wrapper.find('#uploadIcon');
    const input = wrapper.find('input').first();
    expect(icon.length).toBe(1);
    expect(input.length).toBe(1);
    done();
  });
});
