// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoUniversal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoUniversal/i);
    expect(titleElement).toBeInTheDocument();
});
