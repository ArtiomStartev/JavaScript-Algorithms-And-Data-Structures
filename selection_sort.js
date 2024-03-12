/**
 * Sorts an array in ascending order using the Selection Sort algorithm.
 * @param array - The array to be sorted
 * @returns The sorted array
 */

function selectionSort(array) {
  // Initialize a variable to count the number of iterations
  let iterations = 0;

  // Outer loop iterates through each element of the array
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Initialize minIndex to the current index i

    // Inner loop iterates through the unsorted part of the array
    for (let j = i + 1; j < array.length; j++) {
      iterations++; // Count the number of iterations

      // Update minIndex if a smaller element is found
      if (array[j] < array[minIndex]) minIndex = j;
    }

    // If minIndex is different from i, swap the elements at indices i and minIndex
    if (i !== minIndex) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array; // Return the sorted array
}
