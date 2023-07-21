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

/**
 * Create adjacency list from given edges
 * @param {number} V Number of vertices in graph
 * @param {number[][]} E Number of edges in graph (u,v,w)
 * @returns {number[][]} Adjacency list
 */
export function createGraph(E, V) {
    const adjList = []
    for (let i = 0; i < V; i++) {
        adjList.push([])
    }
    for (let i = 0; i < E.length; i++) {
        adjList[E[i][0]].push([E[i][1], E[i][2]])
        adjList[E[i][1]].push([E[i][0], E[i][2]])
    }
    return adjList
}

/**
 *
 * @param {number[][]} graph
 * @param {number} V
 * @param {number} src
 * @returns {number[][]}
 */
export function dijkstra(graph, V, src) {
    /**
     * 用于存储最短距离和前驱节点
     */
    const dist = []
    /**
     * 用于标记是否已经确定最短距离
     */
    const visited = Array(V).fill(false)

    for (let i = 0; i < V; i++) {
        dist.push([Infinity, -1])
    }

    dist[src][0] = 0

    for (let i = 0; i < V; i++) {
        // 找到最短距离的点
        let idx = -1
        for (let j = 0; j < V; j++) {
            if (!visited[j] && (idx === -1 || dist[j][0] < dist[idx][0])) {
                idx = j
            }
        }
        // 设置为已确定最短距离
        visited[idx] = true
        // 更新相邻点的距离
        for (let j = 0; j < graph[idx].length; j++) {
            const v = graph[idx][j][0]
            const w = graph[idx][j][1]
            if (
                !visited[v] &&
                dist[idx][0] !== Infinity &&
                dist[idx][0] + w < dist[v][0]
            ) {
                dist[v][0] = dist[idx][0] + w
                dist[v][1] = idx
            }
        }
    }

    return dist
}
