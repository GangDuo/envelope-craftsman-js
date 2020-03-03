import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders プレビュー button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("プレビュー");
  expect(linkElement).toBeInTheDocument();
});
