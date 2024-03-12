/**
 * Iterative function to implement Binary Search
 * @param array - The sorted array to search in
 * @param target - The target value to search for
 * @returns The index of the target value if found, otherwise -1
 */

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  // Initialize a variable to count the number of iterations
  let iterations = 0;

  // Iterate while start not meets end
  while (start <= end) {
    iterations++; // Counting the number of iterations

    // Find the middle index
    const middle = Math.floor((start + end) / 2);

    // If target is found at middle, return its index
    if (array[middle] === target) return middle;

    // If target is greater than the middle element, search in the right half
    if (array[middle] < target) start = middle + 1;

    // If target is less than the middle element, search in the left half
    if (array[middle] > target) end = middle - 1;
  }

  // If target is not found, return -1
  return -1;
}
