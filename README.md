# 🪐 JavaScript Algorithms and Data Structures

Welcome to the JavaScript Algorithms and Data Structures repository! Here you'll find implementations of various algorithms and data structures in JavaScript.

## Algorithms

### Linear Search
The Linear Search algorithm sequentially checks each element in an array until it finds the target element or reaches the end of the array.
This algorithm is simple and straightforward, making it suitable for small arrays or unsorted data.
One advantage is its ease of implementation and understanding, but it is less efficient than other search algorithms for larger datasets due to its linear time complexity.
The main idea behind linear search is to iterate through each element of the array, comparing it with the target element until a match is found or the end of the array is reached.
It is commonly used in situations where the dataset is small or unsorted, or when a quick and easy-to-understand solution is needed.

### Iterative Binary Search
The Iterative Binary Search algorithm, designed to find the index of a target value in a sorted array. It operates by repeatedly dividing the search interval in half until the target value is found or the search interval is empty.
This algorithm boasts a logarithmic time complexity, making it highly efficient for large datasets compared to linear search.
Its main advantage lies in its ability to quickly locate target values in sorted arrays, making it ideal for use cases where data is sorted and memory consumption is a concern.
The key idea behind binary search is to continuously halve the search interval, narrowing down the range where the target value may be found with each iteration.
This algorithm is widely used in scenarios where quick and efficient searching is required, such as in computer science algorithms and data structures.

### Recursive Binary Search
The Recursive Binary Search algorithm, searches for a target element in a sorted array. It operates by continuously dividing the search interval in half until the target value is found or the search interval is empty.
This recursive approach offers the same logarithmic time complexity as the iterative binary search, providing efficient searching for large datasets.
One advantage of recursive binary search lies in its concise and elegant implementation, making it easy to understand and maintain.
The key idea behind recursive binary search is to divide the search interval in half recursively until the target value is found or deemed not present in the array.
This algorithm is particularly useful in scenarios where a sorted dataset needs to be searched efficiently, such as in search algorithms and sorting algorithms.

### Selection Sort
The Selection Sort algorithm, sorts an array in ascending order. This algorithm works by repeatedly finding the minimum element from the unsorted part of the array and placing it at the beginning of the sorted portion.
It iterates through the array, selecting the smallest element in each iteration and swapping it with the element at the current position.
One advantage of Selection Sort is its simplicity and ease of implementation, making it suitable for small datasets or situations where code simplicity is preferred over performance optimization.
The main idea behind Selection Sort is to iteratively select the smallest element from the unsorted portion of the array and swap it with the element at the current position until the entire array is sorted.
This algorithm's time complexity is O(n^2), making it less efficient than other sorting algorithms for large datasets.
However, Selection Sort's simplicity and ease of understanding make it a valuable teaching tool and a practical choice for sorting small arrays.

### Bubble Sort
The Bubble Sort algorithm, sorts an array in ascending order. This algorithm works by repeatedly iterating through the array, comparing adjacent elements, and swapping them if they are in the wrong order.
It continues this process until the entire array is sorted. One advantage of Bubble Sort is its simplicity and ease of implementation, making it suitable for educational purposes and small datasets.
However, Bubble Sort's time complexity is O(n^2), which can make it inefficient for large datasets.
The main idea behind Bubble Sort is to "bubble up" the largest elements to their correct positions by repeatedly comparing and swapping adjacent elements.
Despite its inefficiency for large datasets, Bubble Sort's simplicity makes it a useful introductory algorithm for understanding sorting concepts and algorithms.

### Quick Sort
The Quick Sort algorithm, sorts an array in ascending order. Quick Sort is a divide-and-conquer algorithm that works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
It then recursively sorts the sub-arrays. One of the key advantages of Quick Sort is its efficient average-case time complexity of O(n log n), making it suitable for sorting large datasets.
However, Quick Sort's worst-case time complexity is O(n^2) when the pivot selection is poorly chosen, although this scenario is rare with good pivot selection strategies.
The main idea behind Quick Sort is to divide the array into smaller sub-arrays, sort the sub-arrays recursively, and then combine them to produce the final sorted array.

### Iterative Tree Sum
The Iterative Tree Sum algorithm, calculates the sum of all node values in a tree by performing an iterative depth-first traversal. It starts by initializing a sum variable to 0 and a stack containing the root node of the tree.
While there are nodes in the stack, it pops the top node, adds its value to the sum, and if the node has children, it pushes them onto the stack. This process continues until all nodes in the tree have been visited.
This algorithm offers an efficient way to compute the sum of tree nodes without using recursion, making it suitable for large trees and scenarios where recursion depth is a concern.

### Recursive Tree Sum
The Recursive Tree Sum algorithm, recursively calculates the sum of all node values in a tree by performing a depth-first traversal. It starts with an initial sum of 0 and iterates through each node in the tree.
For each node, it adds the value of the current node to the sum and, if the node has children, recursively calls the function on each child, adding their values to the sum.
This process continues until all nodes in the tree have been visited. While recursion offers a straightforward approach to tree traversal and sum computation, it may lead to stack overflow errors for very large trees due to excessive recursion depth.

### Cache
The cacheFunction higher-order function is designed to cache the results of another function, enhancing performance by avoiding redundant computations.
It takes a function fn as input and returns a cached version of that function. Internally, it maintains a cache object to store computed results for different inputs.
The factorial function calculates the factorial of a given number. When called with an argument n, it iteratively computes the factorial by multiplying n with each decreasing integer until reaching 1.
This implementation is straightforward but can be inefficient for repetitive calculations, which is where caching with cacheFunction becomes beneficial.

## Graph Algorithms

### Breadth First Search (BFS)
The Breadth-First Search (BFS) on a graph, starts from a specified vertex. It utilizes a queue data structure to explore vertices layer by layer, ensuring that vertices closer to the starting vertex are visited first.
This algorithm is particularly useful for finding the shortest path between two vertices in an unweighted graph, as it systematically explores all vertices at a given distance from the start vertex before moving on to vertices at the next distance.
The BFS traversal order returned by this function represents the sequence in which vertices are visited during the BFS traversal, providing insight into the structure and connectivity of the graph.

### Depth First Search (DFS)
The graph Depth-First Search (DFS) on a graph, starts from a specified vertex. It explores the graph's vertices in a depth-first manner, prioritizing traversal along a branch until it reaches a leaf node before backtracking to explore other adjacent vertices.
Utilizing recursion, it systematically visits each vertex, marking it as visited and adding it to the traversal order. Through the recursive dfs function, it traverses the graph, ensuring that each adjacent vertex is visited only once.
Finally, it returns the DFS traversal order, providing insight into the order in which vertices were visited during the traversal.

### Minimum Vertex Cover
The Minimum Vertex Cover algorithm is designed to identify a minimum vertex cover within a graph, aiming to select the smallest subset of vertices that covers all edges in the graph.
It operates iteratively, targeting the vertex of minimum degree in each iteration to optimize the cover selection. By repeatedly selecting and removing vertices and their adjacent neighbors from the graph, it gradually constructs the minimum vertex cover set.
This algorithm efficiently tackles the vertex cover problem by strategically identifying and including vertices essential for covering the edges of the graph, ultimately returning a set representing the minimum vertex cover.

### Dijkstra's Algorithm
Dijkstra's algorithm, efficiently computes the shortest paths from a specified starting node to all other nodes within a weighted graph. Initially, it sets all node distances to infinity except for the starting node, which is set to zero.
Using a priority queue, it iteratively explores neighboring nodes, updating their distances if shorter paths are discovered. By repeatedly selecting and updating the shortest path candidates, the algorithm gradually converges, ultimately yielding an object containing the shortest distances from the start node to all other nodes in the graph.
This algorithmic approach is invaluable for finding optimal routes in various applications such as network routing and transportation logistics.

### Prim's Algorithm (Minimum Spanning Tree)
Prim's algorithm, efficiently constructs the Minimum Spanning Tree (MST) of a graph by iteratively selecting edges with the minimum weight. Beginning from an arbitrary vertex, it progressively grows the MST by greedily choosing the edge that connects the existing MST to the nearest unvisited vertex.
This process continues until all vertices are visited, resulting in an MST that spans all vertices with minimal total edge weight. The calculatePrimMSTCost function complements this by computing the total cost of the MST.
Prim's algorithm finds extensive application in network design, where it helps minimize the cost of connecting various locations or components while ensuring connectivity.

### Kruskal's Algorithm (Minimum Spanning Tree)
Kruskal's algorithm, constructs the Minimum Spanning Tree (MST) of a weighted, connected, undirected graph by iteratively selecting edges with the minimum weight.
It begins by sorting all edges in increasing order of their weight and then iterates over these edges, adding them to the MST if they do not form a cycle.
This is achieved by maintaining a disjoint set data structure to track the connectivity of vertices. Kruskal's algorithm ensures that the resulting MST spans all vertices with the lowest possible total edge weight.
The calculateMSTCost function complements this by computing the total cost of the MST. Kruskal's algorithm finds applications in various fields, including network design, where it helps minimize the cost of connecting disparate components while maintaining connectivity.
