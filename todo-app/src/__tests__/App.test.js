import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders TODO header', () => {
    render(<App />);
    const headerElement = screen.getByText(/TODO/i);
    expect(headerElement).toBeInTheDocument();
});