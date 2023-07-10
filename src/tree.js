export class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const node = new TreeNode(val)
        if (!this.root) {
            this.root = node
            return
        }
        let current = this.root
        while (current) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = node
                    return
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = node
                    return
                }
                current = current.right
            }
        }
    }

    insertRecursive(val) {
        const node = new TreeNode(val)
        if (!this.root) {
            this.root = node
            return
        }
        if (val < this.root.val) {
            this.root.left = this.insertRecursive(this.root.left, val)
        }
        if (val > this.root.val) {
            this.root.right = this.insertRecursive(this.root.right, val)
        }
    }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.root

export function createBinarySearchTree() {
    return new BinarySearchTree()
}
