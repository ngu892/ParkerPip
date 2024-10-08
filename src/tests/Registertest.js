import { render, screen, fireEvent } from '@testing-library/react';
import User_Register from '../User_Register';

// src/test/Registertest.test.js

describe('User_Register Component', () => {
    test('renders registration form', () => {
        render(<User_Register />);
        const usernameInput = screen.getByLabelText(/username/i);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /register/i });

        expect(usernameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('validates form inputs', () => {
        render(<User_Register />);
        const usernameInput = screen.getByLabelText(/username/i);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /register/i });

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(usernameInput.value).toBe('testuser');
        expect(emailInput.value).toBe('testuser@example.com');
        expect(passwordInput.value).toBe('password123');
    });

    test('submits the form', () => {
        render(<User_Register />);
        const usernameInput = screen.getByLabelText(/username/i);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /register/i });

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(submitButton);

        // Add your form submission assertions here
        // For example, check if a success message is displayed
        const successMessage = screen.getByText(/registration successful/i);
        expect(successMessage).toBeInTheDocument();
    });

    test('shows validation errors for empty form submission', () => {
        render(<User_Register />);
        const submitButton = screen.getByRole('button', { name: /register/i });
        fireEvent.click(submitButton);

        const usernameError = screen.getByText(/username is required/i);
        const emailError = screen.getByText(/email is required/i);
        const passwordError = screen.getByText(/password is required/i);

        expect(usernameError).toBeInTheDocument();
        expect(emailError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
    });

    test('shows validation error for invalid email format', () => {
        render(<User_Register />);
        const emailInput = screen.getByLabelText(/email/i);
        const submitButton = screen.getByRole('button', { name: /register/i });

        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.click(submitButton);

        const emailError = screen.getByText(/invalid email format/i);
        expect(emailError).toBeInTheDocument();
    });

    test('shows validation error for weak password', () => {
        render(<User_Register />);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /register/i });

        fireEvent.change(passwordInput, { target: { value: '123' } });
        fireEvent.click(submitButton);

        const passwordError = screen.getByText(/password is too weak/i);
        expect(passwordError).toBeInTheDocument();
    });
});
    test('shows error message on invalid input', () => {
        render(<User_Register />);
        const usernameInput = screen.getByLabelText(/username/i);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /register/i });

        fireEvent.change(usernameInput, { target: { value: '' } });
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.change(passwordInput, { target: { value: 'short' } });
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/invalid input/i);
        expect(errorMessage).toBeInTheDocument();
    });