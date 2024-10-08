import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './User_Register';

describe('Register Component', () => {
    test('renders registration form and handles submission', () => {
      render(<Register />);
  
      // Check if elements are present
      expect(screen.getByLabelText('ID:')).toBeInTheDocument();
      expect(screen.getByLabelText('Password:')).toBeInTheDocument();
      expect(screen.getByLabelText('Email:')).toBeInTheDocument();
      expect(screen.getByLabelText('Phone   Number:')).toBeInTheDocument();
      expect(screen.getByRole('button',   
   { name: /register/i })).toBeInTheDocument();
  
      // Simulate user input
      fireEvent.change(screen.getByLabelText('ID:'), { target: { value: 'testuser' } });
      fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'password123' } });
      fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByLabelText('Phone   Number:'), { target: { value: '1234567890' } });
  
      // Simulate form submission
      fireEvent.click(screen.getByRole('button', { name: /register/i }));
  
      // Check if the success message is displayed
      expect(screen.getByText('Thank you!')).toBeInTheDocument();
      expect(screen.getByText('Your registration has been submitted.')).toBeInTheDocument();
    });
  });