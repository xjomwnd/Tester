const { fireEvent, waitFor, screen } = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');
const axios = require('axios');
const App = require('./App');

jest.mock('axios');

test('submits test form', async () => {
  axios.post.mockResolvedValueOnce({ data: { success: true } });

  // Render the app
  document.body.innerHTML = '';
  const app = new App();
  document.body.appendChild(app.render());

  // Change input values
  const testNameInput = screen.getByLabelText('Test Name:');
  const testScoreInput = screen.getByLabelText('Test Score:');
  fireEvent.input(testNameInput, { target: { value: 'Test' } });
  fireEvent.input(testScoreInput, { target: { value: '100' } });

  // Click submit button
  const submitButton = screen.getByText('Submit');
  fireEvent.click(submitButton);

  // Wait for success message
  await waitFor(() => expect(screen.getByText('Test submitted successfully!')).toBeInTheDocument());
});
