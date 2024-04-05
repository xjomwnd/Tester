const React = require('react');
const { render, fireEvent, waitFor, screen } = require('@testing-library/react');
require('@testing-library/jest-dom/extend-expect');
const axios = require('axios');
const App = require('./App');

jest.mock('axios');

test('submits test form', async () => {
  axios.post.mockResolvedValueOnce({ data: { success: true } });

  render(<App />);

  fireEvent.change(screen.getByLabelText('Test Name:'), { target: { value: 'Test' } });
  fireEvent.change(screen.getByLabelText('Test Score:'), { target: { value: '100' } });

  fireEvent.click(screen.getByText('Submit'));

  await waitFor(() => expect(screen.getByText('Test submitted successfully!')).toBeInTheDocument());
});

