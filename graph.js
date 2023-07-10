export function bfs(graph, callback) {
    const queue = []
    const visited = new Set()
    queue.push(Object.keys(graph)[0])

    while (queue.length) {
        const node = queue.shift()
        if (!visited.has(node)) {
            callback(node)
            visited.add(node)
            queue.push(...graph[node])
        }
    }
}

export function dfs(graph, callback) {
    const visited = new Set()

    function _dfs(root) {
        if (!root) return
        callback(root)
        visited.add(root)

        for (const node of graph[root]) {
            if (!visited.has(node)) {
                _dfs(node)
            }
        }
    }

    _dfs(Object.keys(graph)[0])
}
