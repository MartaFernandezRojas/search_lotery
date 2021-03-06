import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectLib from './SelectLib';

describe('<SelectLib />', () => {
  test('it should mount', () => {
    render(<SelectLib />);
    
    const SelectLib = screen.getByTestId('SelectLib');

    expect(selectLib).toBeInTheDocument();
  });
});