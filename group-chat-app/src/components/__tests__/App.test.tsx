import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App component', () => {
  it('renders chat UI', () => {
    render(<App />);
    expect(screen.getByText(/Tailwind/i)).toBeInTheDocument();
  });
});
