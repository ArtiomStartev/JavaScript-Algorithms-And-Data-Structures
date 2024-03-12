/**
 * Sorts an array in ascending order using the Bubble Sort algorithm.
 * @param array - The array to be sorted
 * @returns The sorted array
 */

function bubbleSort(array) {
  // Initialize a variable to count the number of iterations
  let iterations = 0;

  // Outer loop iterates through each element of the array
  for (let i = 0; i < array.length; i++) {
    // Inner loop iterates through the unsorted portion of the array
    for (let j = 0; j < array.length - i - 1; j++) {
      iterations++; // Count the number of iterations

      // Compare adjacent elements and swap them if they are in the wrong order
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap the elements
      }
    }
  }

  return array; // Return the sorted array
}
