/**
 * Higher-order function to cache results of another function.
 * @param {Function} fn - The function whose results need to be cached.
 * @returns {Function} - Cached version of the input function.
 */

function cacheFunction(fn) {
  let cache = {};

  return function (n) {
    if (n in cache) {
      // Return cached result if available
      return cache[n];
    }

    let result = fn(n); // Compute result using the original function
    cache[n] = result; // Store result in cache for future use

    return result;
  };
}

/**
 * Computes the factorial of a given number.
 * @param {number} n - The number for which factorial is to be computed.
 * @returns {number} - The factorial of the input number.
 */

function factorial(n) {
  let result = 1;

  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
}
