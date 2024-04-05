// Import the functions or components you want to test
import { add, subtract } from './app'; // assuming app.js contains functions named add and subtract

// Describe block for grouping related tests
describe('Testing Math Functions', () => {
  // Test case for the add function
  test('Adding 1 + 2 equals 3', () => {
    expect(add(1, 2)).toBe(3); // Expectation that add(1, 2) should return 3
  });

  // Test case for the subtract function
  test('Subtracting 3 - 1 equals 2', () => {
    expect(subtract(3, 1)).toBe(2); // Expectation that subtract(3, 1) should return 2
  });

  // You can add more test cases for other functions or scenarios as needed
});
