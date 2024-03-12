/**
 * Performs Depth-First Search on a graph starting from a specified vertex.
 * @param {object} graph - The graph represented as an adjacency list
 * @param {string} vertex - The vertex to start the search from
 * @param {Set} visited - Set to keep track of visited vertices
 * @param {array} traversalOrder - Array to store the DFS traversal order
 */

function dfs(graph, vertex, visited, traversalOrder) {
  visited.add(vertex); // Mark the current vertex as visited
  traversalOrder.push(vertex); // Add the current vertex to the traversal order

  // Get the neighbors of the current vertex from the graph
  const neighbors = graph[vertex];

  // Visit all adjacent vertices that have not been visited
  neighbors?.forEach((neighbor) => {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, traversalOrder);
    }
  });
}

// Function to perform DFS traversal on the graph
function dfsTraversal(graph, startVertex) {
  // Initialize a set to keep track of visited vertices
  const visited = new Set();

  // Initialize an array to store the DFS traversal order
  const traversalOrder = [];

  // Perform DFS traversal from the start vertex
  dfs(graph, startVertex, visited, traversalOrder);

  // Return the DFS traversal order
  return traversalOrder;
}
