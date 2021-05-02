import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Check if the text \'Welcome To The Quiz\' is displayed', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
  const headerElement = screen.getByText(/Welcome To The Quiz/i);
  expect(headerElement).toBeInTheDocument();
});
