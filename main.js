import { createGraph } from './src/graph.js'

const V = 9
const E = [
    [0, 1, 4],
    [0, 7, 8],
    [1, 7, 11],
    [1, 2, 8],
    [7, 8, 7],
    [6, 7, 1],
    [2, 8, 2],
    [6, 8, 6],
    [5, 6, 2],
    [2, 5, 4],
    [2, 3, 7],
    [3, 5, 14],
    [3, 4, 9],
    [4, 5, 10],
]

const graph = createGraph(V, E)

console.log(graph)
