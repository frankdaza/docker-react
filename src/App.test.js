import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('I was changed on the feature branch Knarf', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I was changed on the feature branch Knarf!/i);
  expect(linkElement).toBeInTheDocument();
});
