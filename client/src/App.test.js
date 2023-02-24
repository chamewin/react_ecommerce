import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App without crashing', () => {
    render(<App />);
  });

  test('renders a navigation bar', () => {
    render(<App />);
    const nav = screen.getByTestId('nav');
    expect(nav).toBeInTheDocument();
  });

  test('renders a footer in the App component', () => {
    render(<App />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
