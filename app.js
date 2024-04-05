const axios = require('axios');

function handleSubmit(event) {
  event.preventDefault();

  const testName = event.target.elements.testName.value;
  const testScore = event.target.elements.testScore.value;

  axios.post('/submit', { testName, testScore })
    .then(() => {
      alert('Test submitted successfully!');
    })
    .catch(error => {
      alert('Error submitting test.');
      console.error(error);
    });
}

const form = document.createElement('form');
form.addEventListener('submit', handleSubmit);

const testNameLabel = document.createElement('label');
testNameLabel.textContent = 'Test Name:';
const testNameInput = document.createElement('input');
testNameInput.setAttribute('type', 'text');
testNameInput.setAttribute('name', 'testName');
testNameLabel.appendChild(testNameInput);
form.appendChild(testNameLabel);

const testScoreLabel = document.createElement('label');
testScoreLabel.textContent = 'Test Score:';
const testScoreInput = document.createElement('input');
testScoreInput.setAttribute('type', 'text');
testScoreInput.setAttribute('name', 'testScore');
testScoreLabel.appendChild(testScoreInput);
form.appendChild(testScoreLabel);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

document.body.appendChild(form);
