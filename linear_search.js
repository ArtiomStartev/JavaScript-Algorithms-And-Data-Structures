/**
 * Linear search function to find the index of a target element in an array.
 * @param array - The array to search in
 * @param target - The target element to search for
 * @returns The index of the target element if found, otherwise -1
 */

function linearSearch(array, target) {
  // Initialize a variable to count the number of iterations
  let iterations = 0;

  // Iterate through each element of the array
  for (let i = 0; i < array.length; i++) {
    iterations++; // Counting the number of iterations

    // If the current element is equal to the target, return its index
    if (array[i] === target) return i;
  }

  // If the target element is not found, return -1
  return -1;
}
