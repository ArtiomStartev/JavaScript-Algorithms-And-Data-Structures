/**
 * Sorts an array in ascending order using the Quick Sort algorithm.
 * @param array - The array to be sorted
 * @returns The sorted array
 */

let iterations = 0;

function quick_sort(array) {
  // Base case: If the array has 0 or 1 element, it is already sorted
  if (array.length <= 1) return array;

  // Choose a pivot index (middle element)
  const pivotIndex = Math.floor(array.length / 2);

  const less = [];
  const greater = [];

  for (let i = 0; i < array.length; i++) {
    iterations++; // Count the number of iterations

    // Skip the pivot element
    if (i === pivotIndex) continue;

    // If the element is less than the pivot, add it to the 'less' array
    if (array[i] < array[pivotIndex]) less.push(array[i]);

    // If the element is greater than the pivot, add it to the 'greater' array
    if (array[i] > array[pivotIndex]) greater.push(array[i]);
  }

  // Recursively sort the 'less' and 'greater' arrays and combine them with the pivot element
  return [...quick_sort(less), array[pivotIndex], ...quick_sort(greater)];
}
