/**
 * Performs a depth-first traversal of a tree and computes the sum of all node values.
 * @param {object[]} tree - The tree structure represented as an array of nodes.
 * @returns {number} - The sum of all node values in the tree.
 */

function recursiveTreeSum(tree) {
  let sum = 0;

  // Iterate through each node in the tree
  tree.forEach((node) => {
    // Add the value of the current node to the sum
    sum += node.value;

    // If the current node has children, recursively call the function on each child
    if (node.children) {
      sum += recursiveTreeSum(node.children);
    }
  });

  // Return the sum of all node values
  return sum;
}
