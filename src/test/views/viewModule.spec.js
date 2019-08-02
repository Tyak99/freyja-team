import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ViewModule } from '../../views/ViewModule/view-module';
import { getModule } from '../../../store/actions/moduleActions';

function shallowSetup() {
  const props = {
    isAuthenticated: true,
    isLoading: false,
    singleModule: {
      id: 4,
      name: 'Getting Started',
      description: 'introduction to customer learning',
      contents: [
        {
          name: 'Introduction',
          link: 'http://localhost:3000',
          id: 1,
        },
      ],
    },
    getModule,
    match: { params: { moduleId: '4' } },
  };
  const enzymeWrapper = shallow(<ViewModule {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('View Module component', () => {
  it('should render ViewModule correctly', () => {
    const { enzymeWrapper } = shallowSetup();
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
