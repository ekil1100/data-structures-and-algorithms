import { UnionFind } from './union-find'

const uf = new UnionFind()
uf.add(1)
uf.add(2)
uf.add(3)
uf.add(4)
uf.add(5)
console.log(uf.parent)

uf.union(1, 2)
console.log(uf.parent)
uf.union(3, 4)
console.log(uf.parent)
uf.union(3, 5)
console.log(uf.parent)

console.log(uf.find(8))
console.log(uf.isConnected(3, 5))
console.log(uf.parent)
