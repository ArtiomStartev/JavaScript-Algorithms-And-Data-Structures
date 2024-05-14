/**
 * Finds the Minimum Spanning Tree (MST) using Prim's Algorithm.
 * @param {object} graph - The graph represented as an adjacency list.
 * @returns {Array} - An array representing the edges of the Minimum Spanning Tree.
 */
function findMinimumSpanningTree(graph) {
  const vertices = Object.keys(graph);
  const visited = new Set();
  const mst = [];

  // Start with the first vertex
  visited.add(vertices[0]);

  // Repeat until all vertices are visited
  while (visited.size < vertices.length) {
    let minEdge = [null, null, Infinity]; // [source, destination, weight]

    // Iterate over visited vertices and find the minimum edge to connect with an unvisited vertex
    for (const vertex of visited) {
      for (const neighbor in graph[vertex]) {
        if (!visited.has(neighbor) && graph[vertex][neighbor] < minEdge[2]) {
          minEdge = [vertex, neighbor, graph[vertex][neighbor]];
        }
      }
    }

    // Add the minimum edge to the MST
    mst.push(minEdge);
    visited.add(minEdge[1]); // Add the destination vertex to visited set
  }

  return mst;
}

/**
 * Calculates the total cost of the Minimum Spanning Tree (MST).
 * @param {Array} mst - The Minimum Spanning Tree represented as an array of edges.
 * @returns {number} - The total cost of the Minimum Spanning Tree.
 */
function calculatePrimMSTCost(mst) {
  return mst.reduce((acc, edge) => (acc += edge[2]), 0);
}
