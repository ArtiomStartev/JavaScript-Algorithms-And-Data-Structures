/**
 * Finds the Minimum Spanning Tree (MST) of a weighted, connected, undirected graph using Kruskal's Algorithm.
 * @param {object} graph - The graph represented as an adjacency list where the keys are vertices and the values are objects containing adjacent vertices as keys and edge weights as values.
 * @returns {Array} - An array representing the edges of the Minimum Spanning Tree.
 */
function findMinimumSpanningTree(graph) {
  // Step 1: Sort all edges
  const edges = getSortedEdges(graph);

  // Step 2: Initialize disjoint set
  const parent = initializeDisjointSet(graph);

  // Step 3: Find MST edges
  return findMST(edges, parent);
}

/**
 * Sorts all edges of the graph in increasing order of their weight.
 * @param {object} graph - The graph represented as an adjacency list.
 * @returns {Array} - An array representing the sorted edges.
 */
function getSortedEdges(graph) {
  const edges = [];
  for (const vertex in graph) {
    for (const neighbor in graph[vertex]) {
      edges.push([vertex, neighbor, graph[vertex][neighbor]]);
    }
  }

  // Sort edges by weight
  edges.sort((a, b) => a[2] - b[2]);

  return edges;
}

/**
 * Initializes the disjoint set data structure.
 * @param {object} graph - The graph represented as an adjacency list.
 * @returns {object} - An object representing the disjoint set.
 */
function initializeDisjointSet(graph) {
  const parent = {};
  for (const vertex in graph) {
    // Each vertex is its own parent initially
    parent[vertex] = vertex;
  }

  return parent;
}

/**
 * Finds the Minimum Spanning Tree (MST) edges using Kruskal's Algorithm.
 * @param {Array} edges - An array representing all the edges of the graph sorted in increasing order of their weight.
 * @param {object} parent - The disjoint set data structure.
 * @returns {Array} - An array representing the edges of the Minimum Spanning Tree.
 */
function findMST(edges, parent) {
  const mstEdges = [];

  for (const edge of edges) {
    const [src, dest, _] = edge;
    const srcParent = findParent(parent, src);
    const destParent = findParent(parent, dest);

    if (srcParent !== destParent) {
      mstEdges.push(edge);
      union(parent, srcParent, destParent);
    }
  }

  return mstEdges;
}

/**
 * Finds the parent of a vertex in the disjoint set.
 * @param {object} parent - The disjoint set data structure.
 * @param {string} vertex - The vertex whose parent needs to be found.
 * @returns {string} - The parent vertex.
 */
function findParent(parent, vertex) {
  if (parent[vertex] === vertex) return vertex; // Base case: vertex is its own parent
  return findParent(parent, parent[vertex]); // Recursively find parent
}

/**
 * Performs the union operation in the disjoint set.
 * @param {object} parent - The disjoint set data structure.
 * @param {string} x - The first vertex.
 * @param {string} y - The second vertex.
 */
function union(parent, x, y) {
  const xRoot = findParent(parent, x);
  const yRoot = findParent(parent, y);
  parent[xRoot] = yRoot; // Set parent of xRoot to yRoot
}

/**
 * Calculates the total cost of the Minimum Spanning Tree (MST).
 * @param {Array} mst - The Minimum Spanning Tree represented as an array of edges.
 * @returns {number} - The total cost of the Minimum Spanning Tree.
 */
function calculateMSTCost(mst) {
  return mst.reduce((acc, edge) => (acc += edge[2]), 0);
}
