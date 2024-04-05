// app.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [testName, setTestName] = useState('');
  const [testScore, setTestScore] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/submit', { testName, testScore });
      alert('Test submitted successfully!');
    } catch (error) {
      alert('Error submitting test.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Test Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Test Name:
          <input type="text" value={testName} onChange={(e) => setTestName(e.target.value)} />
        </label>
        <br />
        <label>
          Test Score:
          <input type="text" value={testScore} onChange={(e) => setTestScore(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
