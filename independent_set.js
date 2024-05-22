/**
 * Finds a maximal independent set in a graph.
 * @param {object} graph - The graph represented as an adjacency list.
 * @returns {Array} - An array representing the vertices of a maximal independent set.
 */

function findMaximalIndependentSet(graph) {
  // Initialize an empty set for the independent set
  const independentSet = new Set();

  // Repeat until all vertices are covered
  while (Object.keys(graph).length) {
    // Step 1: Select a vertex of minimum degree
    let minDegreeVertex = null;
    let minDegree = Infinity;

    for (const vertex in graph) {
      const degree = graph[vertex].length;
      if (degree < minDegree) {
        minDegree = degree;
        minDegreeVertex = vertex;
      }
    }

    // Add the selected vertex to the independent set
    independentSet.add(minDegreeVertex);

    // Step 2: Remove the selected vertex and its neighborhood from the graph
    graph[minDegreeVertex].forEach((neighbor) => {
      // Remove the selected vertex from the adjacency lists of its neighbors
      graph[neighbor].forEach((vertex) => {
        graph[vertex] = graph[vertex].filter((v) => v !== neighbor);
      });

      delete graph[neighbor]; // Remove the neighbor itself from the graph
    });

    delete graph[minDegreeVertex]; // Remove the selected vertex
  }

  return independentSet;
}
