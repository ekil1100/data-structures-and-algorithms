import { test, expect } from 'vitest'
import { bfs, dfs } from './graph.js'

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

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
