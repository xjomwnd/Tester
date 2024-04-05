// App.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('submits test form', async () => {
  axios.post.mockResolvedValueOnce({ data: { success: true } });

  render(<App />);

  fireEvent.change(screen.getByLabelText('Test Name:'), { target: { value: 'Test' } });
  fireEvent.change(screen.getByLabelText('Test Score:'), { target: { value: '100' } });

  fireEvent.click(screen.getByText('Submit'));

  await waitFor(() => expect(screen.getByText('Test submitted successfully!')).toBeInTheDocument());
});
