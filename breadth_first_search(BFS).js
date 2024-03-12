/**
 * Performs Breadth-First Search on a graph starting from a specified vertex.
 * @param {object} graph - The graph represented as an adjacency list
 * @param {string} startVertex - The vertex to start the search from
 * @returns {object} - An object representing the BFS traversal order
 */

function bfs(graph, startVertex) {
  // Initialize an empty queue for BFS traversal
  const queue = [];

  // Initialize a set to keep track of visited vertices
  const visited = new Set();

  // Initialize an array to store the BFS traversal order
  const traversalOrder = [];

  // Add the start vertex to the queue and mark it as visited
  queue.push(startVertex);
  visited.add(startVertex);

  // Perform BFS traversal
  while (queue.length) {
    // Dequeue a vertex from the queue
    const currentVertex = queue.shift();

    // Add the current vertex to the traversal order
    traversalOrder.push(currentVertex);

    // Get the neighbors of the current vertex from the graph
    const neighbors = graph[currentVertex];

    // Iterate through the neighbors
    neighbors?.forEach((neighbor) => {
      // If the neighbor has not been visited, mark it as visited and enqueue it
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }

  // Return the BFS traversal order
  return traversalOrder;
}
