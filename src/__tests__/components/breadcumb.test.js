import React, { Component } from 'react';

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { Breadcrumb } from '../../components/Breadcrumb';

describe('breadcumb', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Breadcrumb />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should search if link is clicked', () => {
    const wrapper = shallow(<Breadcrumb />);
    const firstLink = wrapper.find('Link').first();
    const toProp = firstLink.prop('to');
    const text = firstLink.text();
    expect(toProp).toBe(`/items?search=${text}`);
  });
});
