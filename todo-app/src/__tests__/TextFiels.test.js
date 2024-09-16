import { render, screen } from '@testing-library/react';
import TextField from '../components/TextField';

test('text input accepts letters and numbers', () => {
    render(<TextField />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    expect(inputElement).toBeInTheDocument();
    inputElement.value = '123abc';
    expect(inputElement.value).toBe('123abc');
});