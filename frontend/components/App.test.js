// Write your tests here
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AppClass from './AppClass';

// import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user'

test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without errors', () => {
  render(<AppClass />)
});