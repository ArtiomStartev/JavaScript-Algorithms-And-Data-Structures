/**
 * Performs an iterative depth-first traversal of a tree and computes the sum of all node values.
 * @param {object[]} tree - The tree structure represented as an array of nodes.
 * @returns {number} - The sum of all node values in the tree.
 */

function iterativeTreeSum(tree) {
  let sum = 0;
  let stack = [...tree];

  // Iterate through the stack
  while (stack.length) {
    // Pop the top node from the stack
    let node = stack.pop();

    // Add the value of the node to the sum
    sum += node.value;

    // If the node has children, push them onto the stack
    if (node.children) {
      stack.push(...node.children);
    }
  }

  return sum;
}
