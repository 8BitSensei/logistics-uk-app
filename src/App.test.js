import { render, screen } from '@testing-library/react';
import App from './App';

test('renders drivers', () => {
  render(<App />);
  const linkElement = screen.getByText(/Driver Name/i);
  expect(linkElement).toBeInTheDocument();
});
