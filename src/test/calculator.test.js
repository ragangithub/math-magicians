import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Displays from '../components/Displays';

describe('Calculator', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Displays />);
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('/')).toBeInTheDocument();
    expect(getByText('X')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
  });
});

test('should change symbol when the "+/-" button is clicked', () => {
  const { getByText } = render(<Displays />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('+/-'));
  expect(getByText('-9')).toBeInTheDocument();
});
