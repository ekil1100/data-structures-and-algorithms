import { test, expect } from 'vitest'
import { bfs, dfs, toGraph, dijkstra } from './graph.js'

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

const edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 2],
]

test('bfs', () => {
    const result = []
    bfs(graph, (node) => result.push(node))
    expect(result).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
})

test('dfs', () => {
    const result = []
    dfs(graph, (node) => result.push(node))
    expect(result).toEqual(['a', 'b', 'd', 'f', 'c', 'e'])
})

test('toGraph', () => {
    const graph = toGraph(edges)
    console.log(graph)
    expect(graph).toEqual(
        new Map([
            [0, new Set([1, 2])],
            [1, new Set([2])],
        ]),
    )
})

test('dijkstra', () => {
    const graph = [
        [
            [1, 4],
            [7, 8],
        ],
        [
            [0, 4],
            [7, 11],
            [2, 8],
        ],
        [
            [1, 8],
            [8, 2],
            [5, 4],
            [3, 7],
        ],
        [
            [2, 7],
            [5, 14],
            [4, 9],
        ],
        [
            [3, 9],
            [5, 10],
        ],
        [
            [6, 2],
            [2, 4],
            [3, 14],
            [4, 10],
        ],
        [
            [7, 1],
            [8, 6],
            [5, 2],
        ],
        [
            [0, 8],
            [1, 11],
            [8, 7],
            [6, 1],
        ],
        [
            [7, 7],
            [2, 2],
            [6, 6],
        ],
    ]
    const result = dijkstra(graph, 9, 0)
    expect(result).toEqual([
        [0, -1],
        [4, 0],
        [12, 1],
        [19, 2],
        [21, 5],
        [11, 6],
        [9, 7],
        [8, 0],
        [14, 2],
    ])
})
