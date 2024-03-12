/**
 * Recursively searches for a target element in a sorted array using the Binary Search algorithm.
 * @param array - The sorted array to search in
 * @param target - The target element to search for
 * @param start - The start index of the current search range
 * @param end - The end index of the current search range
 * @returns The index of the target element if found, otherwise -1
 */

let iterations = 0;

function binary_search(array, target, start, end) {
  iterations++; // Count the number of iterations

  // Calculate the middle index of the current search range
  const middle = Math.floor((start + end) / 2);

  // Return the index of the target element if found
  if (array[middle] === target) return middle;

  // If the middle element is less than the target, search in the right half
  if (array[middle] < target)
    return binary_search(array, target, middle + 1, end);

  // If the middle element is greater than the target, search in the left half
  if (array[middle] > target)
    return binary_search(array, target, start, middle - 1);

  // Return -1 if the target element is not found
  return -1;
}
