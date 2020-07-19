import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('button component', () => {
  let buttonText;
  beforeEach(() => {
    buttonText = 'Vender';
  });
  test('should match snapshot', () => {
    const wrapper = shallow(<Button text={buttonText} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.custom-button').text()).toBe(buttonText)
  });
});
