import React from 'react';
import { shallow } from 'enzyme';
import { Community } from '../../components/Community/Community';
import * as actions from '../../../store/actions/community';

describe('test community component methods', () => {
  const props = {
    getCommunityMessages: () => actions.getCommunityMessages(),
  };

  const enzymeWrapper = shallow(<Community {...props} />);
  let wrapper;
  beforeEach(() => {
    wrapper = enzymeWrapper;
  });

  it('should test community', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
