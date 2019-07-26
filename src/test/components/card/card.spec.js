import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../../components/Card/Card';

let Cards;

describe('Card component', () => {
  it('should render correctly the card component', () => {
    Cards = shallow(<Card />);
    expect(Cards).toMatchSnapshot();
  });
});
