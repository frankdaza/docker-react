import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('hi there knarf', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi there Knarf!/i);
  expect(linkElement).toBeInTheDocument();
});
