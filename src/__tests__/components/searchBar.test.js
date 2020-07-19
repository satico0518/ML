import React from 'react';

import { shallow, mount } from 'enzyme';
import SearchBar from '../../components/SearchBar';
import { Provider } from 'react-redux';

describe('searchbar component', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should call handleSubmit on form submit', () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(
      <Provider store={{getState: () => {}, items: []}}>
        <SearchBar />
      </Provider>
    );
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledWith({ preventDefault: () => {} });
  });
});
