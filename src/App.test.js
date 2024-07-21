import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test("it should have correct title", () => {
  render(<App />);
  const text = screen.getByText("TDD Calculator");
  expect(text).toBeInTheDocument();
});