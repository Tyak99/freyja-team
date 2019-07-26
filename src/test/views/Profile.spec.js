import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Profile } from '../../views/Profile/Profile';

const props = {
  userId: 4,
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
  getProfile: () => {},
  isLoading: false,
  uploadImage: () => {},
  updateProfile: () => {},
};

describe('component: Profile compoennt', () => {
  let wrapper;
  let submitHandler;
  beforeEach(() => {
    sinon.spy(Profile.prototype, 'handleInput');
    sinon.spy(Profile.prototype, 'toggleEdit');
    wrapper = shallow(<Profile {...props} />);
    submitHandler = sinon.spy(wrapper.instance(), 'submitHandler');
    wrapper.instance().forceUpdate();
  });
  afterEach(() => {
    Profile.prototype.handleInput.restore();
    Profile.prototype.toggleEdit.restore();
  });
  it('should render correctly', () => {
    shallow(<Profile {...props} />);
  });
  it('should test the toggleEdit function', (done) => {
    const button = wrapper.find('UserDetails').shallow().find('.f-font').first();
    expect(button.length).toBe(1);
    button.simulate('click');
    expect(wrapper.state().isEdit).toEqual(true);
    done();
  });
  it('test for the handleinput to be called when user updates their profile', (done) => {
    const button = wrapper.find('UserDetails').shallow().find('.f-font').first();
    button.simulate('click');
    expect(wrapper.state().isEdit).toEqual(true);
    const input = wrapper.find('UserDetails').shallow().find('#username').first();
    const event = { target: { name: 'username', value: 'tyak' } };
    expect(input.length).toBe(1);
    input.simulate('change', event);
    expect(Profile.prototype.handleInput.called).toBe(true);
    done();
  });
  it('should call the submit profile Handler when submit button is clicked', (done) => {
    const editButton = wrapper.find('UserDetails').shallow().find('.f-font').first();
    editButton.simulate('click');
    expect(wrapper.state().isEdit).toEqual(true);
    const submitButton = wrapper.find('UserDetails').shallow().find('#update');
    expect(submitButton.length).toBe(1);
    submitButton.simulate('click');
    expect(submitHandler.called).toBe(true);
    done();
  });
});
