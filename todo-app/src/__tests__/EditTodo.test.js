import { render, screen, fireEvent } from '@testing-library/react';
import EditTodo from '../components/EditTodo';

test('edits an existing todo item', () => {
    render(<EditTodo todo={{ id: 1, text: 'Old Todo', completed: false }} />);
    const editInputElement = screen.getByDisplayValue(/Old Todo/i);
    fireEvent.change(editInputElement, { target: { value: 'Updated Todo' } });
    const saveButtonElement = screen.getByText(/Save/i);
    fireEvent.click(saveButtonElement);
    expect(screen.getByText(/Updated Todo/i)).toBeInTheDocument();
});