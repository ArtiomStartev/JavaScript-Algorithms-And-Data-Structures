/**
 * Finds a minimum vertex cover in a graph.
 * @param {object} graph - The graph represented as an adjacency list.
 * @returns {Set} - A minimum vertex cover of the graph.
 */

function findMinimumVertexCover(graph) {
  // Initialize an empty set for the minimum vertex cover
  const vertexCover = new Set();

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

    // Add the selected vertex to the vertex cover set
    vertexCover.add(minDegreeVertex);

    // Step 2: Remove the selected vertex and its neighborhood from the graph
    graph[minDegreeVertex].forEach((neighbor) => {
      delete graph[neighbor]; // Remove the adjacent vertices
    });
    delete graph[minDegreeVertex]; // Remove the selected vertex
  }

  return vertexCover;
}
