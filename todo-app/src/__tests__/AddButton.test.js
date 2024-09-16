import { render, screen, fireEvent } from '@testing-library/react';
import AddButton from '../components/AddButton';

test('shows error message when adding empty todo', () => {
    render(<AddButton />);
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.click(buttonElement);
    const errorElement = screen.getByText(/Todo text is required/i);
    expect(errorElement).toBeInTheDocument();
});