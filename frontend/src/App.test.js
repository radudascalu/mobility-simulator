import { render, screen } from '@testing-library/react';
import App from './App';

test('App starts by rendering step 1', () => {
  render(<App />);
  const step1 = screen.getByText('Step 1/2');
  expect(step1).toBeInTheDocument();

  const step2 = screen.queryByText('Step 2/2');
  expect(step2).not.toBeInTheDocument();
});

test('Expect Back button to be disabled on step 1', () => {
  render(<App />);
  expect(screen.getByText(/Back/i).closest('button')).toHaveAttribute('disabled');
});

test('Pressing next once will move to step 2', () => {
  render(<App />);
  const nextBtn = screen.getByText('Next');
  nextBtn.click();

  const step2 = screen.getByText('Step 2/2');
  expect(step2).toBeInTheDocument();

  const step1 = screen.queryByText('Step 1/2');
  expect(step1).not.toBeInTheDocument();
});

test('Pressing next once and back will take us to step 2', () => {
  render(<App />);
  const nextBtn = screen.getByText('Next');
  nextBtn.click();
  const backBtn = screen.getByText('Back');
  backBtn.click();

  const step1 = screen.getByText('Step 1/2');
  expect(step1).toBeInTheDocument();

  const step2 = screen.queryByText('Step 2/2');
  expect(step2).not.toBeInTheDocument();
});

test('Pressing next twice will move to results', () => {
  render(<App />);
  const nextBtn = screen.getByText('Next');
  nextBtn.click();
  nextBtn.click();

  const step2 = screen.queryByText('Step 2/2');
  expect(step2).not.toBeInTheDocument();

  const results = screen.getByText('Simulation results');
  expect(results).toBeInTheDocument();
});

test('Pressing next twice and then reset will go to step 1', () => {
  render(<App />);
  const nextBtn = screen.getByText('Next');
  nextBtn.click();
  nextBtn.click();
  const resetBtn = screen.getByText('Reset');
  resetBtn.click();

  const step1 = screen.getByText('Step 1/2');
  expect(step1).toBeInTheDocument();

  const results = screen.queryByText('Simulation results');
  expect(results).not.toBeInTheDocument();
}); 
