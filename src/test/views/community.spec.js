import React from 'react';
import { shallow } from 'enzyme';
import Community from '../../views/Community/CommunityPage';

describe('test community page', () => {
  const comm = shallow(<Community />);

  it('should test community page', () => {
    expect(comm).toMatchSnapshot();
  });
});
