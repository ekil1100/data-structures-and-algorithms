export class UnionFind {
    constructor() {
        this.parent = {}
    }

    add(node) {
        if (!this.parent[node]) {
            this.parent[node] = node
        }
    }

    find(node) {
        if (!this.parent[node]) return null
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node])
        }
        return this.parent[node]
    }

    union(node1, node2) {
        let root1 = this.find(node1)
        let root2 = this.find(node2)

        if (root1 !== root2) {
            this.parent[root1] = root2
        }
    }

    isConnected(node1, node2) {
        return this.find(node1) === this.find(node2)
    }
}
