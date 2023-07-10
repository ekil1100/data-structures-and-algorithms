import { test, expect } from 'vitest'
import { bfs, dfs, toGraph } from './graph.js'

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
