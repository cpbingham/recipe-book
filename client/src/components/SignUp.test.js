import React from 'react';
import { cleanup, fireEvent, render as rtlRender, screen } from '@testing-library/react';
import SignUp from './SignUp';
import { BrowserRouter as Router } from 'react-router-dom'

afterEach(cleanup);

const render = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return rtlRender(ui, {wrapper: Router})
}

it('allows the user to sign up successfully', () => {
  render(<SignUp />);

  fireEvent.click(screen.getByText(/sign up/i))

  expect(screen.getByText('Create your own recipe RecipeBook')).toBeInTheDocument();
  expect(screen.getByText('Sign Up')).toBeInTheDocument();
});
