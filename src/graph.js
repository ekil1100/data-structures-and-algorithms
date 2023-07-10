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

// function bfs(graph, start, target){
//     const queue = []
//     const visited = new Set()
//     queue.push(start)

//     while(queue.length){
//       const node = queue.shift()
//       if (!visited.has(node)){
//         if(node === target){
//           return true
//         }
//         visited.add(node)
//         if(graph.has(node)){
//           queue.push(...graph.get(node))
//         }
//       }
//     }

//     return false
//   }

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

export function toGraph(edges) {
    const graph = new Map()
    for (const [from, to] of edges) {
        if (!graph.has(from)) graph.set(from, new Set())
        graph.set(from, graph.get(from).add(to))
    }
    return graph
}
