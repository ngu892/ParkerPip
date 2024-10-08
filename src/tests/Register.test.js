import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../pages/User_Register';
describe('Register component', () => {
  it('should render form fields and submit button', () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    expect(screen.getByLabelText(/ID:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number:/i)).toBeInTheDocument();
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
  });

  it('should display success message after form submission', () => {
    render(
      <Router>
        <Register />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/ID:/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number:/i), { target: { value: '1234567890' } });

    fireEvent.click(screen.getByText(/Register/i));

    expect(screen.getByText(/Thank you!/i)).toBeInTheDocument();
    expect(screen.getByText(/Your registration has been submitted./i)).toBeInTheDocument();
  });
});