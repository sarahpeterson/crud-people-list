import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('renders people list - empty', async () => {
  const { getAllByTestId } = render(<App />);
  expect(getAllByTestId('heading')[0]).toBeVisible()
});

test('click', () => {
  render(<App />)
  userEvent.click(screen.getByText('Add Employee'))
  expect(screen.getByText('Add Employee')).not.toHaveAttribute('disabled')
})

test('renders add view', async () => {
  const { getAllByTestId } = render(<App />);
  await userEvent.click(screen.getByText('Add Employee'))
  expect(getAllByTestId('people-input')[0]).toBeEmpty()
});

test('renders people list', async () => {
  render(<App />);
  await userEvent.click(screen.getByText('Add Employee'))
  await expect(screen.getByText('Add a new employee')).toBeVisible()
  userEvent.type(screen.getByLabelText('Name'), 'Sarah')
  userEvent.type(screen.getByLabelText('Birthdate'), '10/19/2020')
  userEvent.type(screen.getByLabelText('Job Title'), 'Developer')
  userEvent.selectOptions(screen.getByTestId('select'), ["United States"])
  userEvent.type(screen.getByLabelText('Salary'), '50000')
  await expect(screen.getByTestId('edit-save')).not.toHaveAttribute('disabled')
  window.alert = () => {};
  await userEvent.click(screen.getByTestId('edit-save'))
  expect(screen.getAllByText('Edit')[0]).not.toHaveAttribute('disabled')
});
