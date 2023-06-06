import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quote component', () => {
  test('renders correctly', () => {
    const component = render(<Quote />);
    expect(component).toMatchSnapshot();
  });
});
