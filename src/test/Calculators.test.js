import React from 'react';
import { render } from '@testing-library/react';
import Calculators from '../components/Calculators';

describe('Quote component', () => {
  test('renders correctly', () => {
    const component = render(<Calculators />);
    expect(component).toMatchSnapshot();
  });
});
