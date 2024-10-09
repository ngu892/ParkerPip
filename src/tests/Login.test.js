import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/User_Login';
import '@testing-library/jest-dom';

describe('Login Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('renders Login component', () => {
    render(<Login />);
    expect(screen.getByText(/Owner or Tenant Login/i)).toBeInTheDocument();
  });

  test('allows user to input userId and password', () => {
    render(<Login />);
    
    const userIdInput = screen.getByLabelText(/ID:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);

    fireEvent.change(userIdInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    expect(userIdInput.value).toBe('testUser');
    expect(passwordInput.value).toBe('testPassword');
  });

  test('submits the form with userId and password', () => {
    render(<Login />);
    
    const userIdInput = screen.getByLabelText(/ID:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const submitButton = screen.getByRole('button', { name: /Login/i });

    fireEvent.change(userIdInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
    fireEvent.click(submitButton);

    expect(console.log).toHaveBeenCalledWith('Login data:', {
      userId: 'testUser',
      password: 'testPassword'
    });
  });
});