/**
 * Performs Dijkstra's algorithm to find the shortest path from a start node to all other nodes in the graph.
 * @param {object} graph - The graph represented as an adjacency list with edge weights
 * @param {string} startNode - The starting node
 * @returns {object} - An object containing the shortest distances from the start node to all other nodes
 */

function dijkstra(graph, startNode) {
  // Initialize distances object with all nodes set to Infinity except the start node
  const distances = {};
  Object.keys(graph).forEach((node) => (distances[node] = node === startNode ? 0 : Infinity));

  // Initialize priority queue as an array of nodes sorted by distance
  const queue = Object.keys(graph).sort((a, b) => distances[a] - distances[b]);

  // While the priority queue is not empty
  while (queue.length > 0) {
    // Dequeue the node with the shortest distance
    const currentNode = queue.shift();

    // Visit each neighbor of the current node
    Object.keys(graph[currentNode]).forEach((neighbor) => {
      const distanceToNeighbor = graph[currentNode][neighbor];
      const totalDistance = distances[currentNode] + distanceToNeighbor;

      // Update distance if shorter path is found
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;

        // Reorder the queue based on updated distances
        queue.sort((a, b) => distances[a] - distances[b]);
      }
    });
  }

  return distances;
}
