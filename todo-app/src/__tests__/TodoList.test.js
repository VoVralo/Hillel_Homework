import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { addTodo } from '../actions/todoActions';

test('adds new todo item to the list', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.click(buttonElement);
    expect(screen.getByText(/New Todo Item/i)).toBeInTheDocument();
});