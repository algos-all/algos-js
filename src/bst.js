class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.lft = null
        this.rgt = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    get_node_with_parent(key) {
        let [node, parent] = [this.root, null]

        while (node) {
            if (key === node.key) {
                return [node, parent]
            }

            if (key < node.key) {
                [node, parent] = [node.lft, node]
            } else {
                [node, parent] = [node.rgt, node]
            }
        }

        return [null, parent]
    }

    get(key) {
        let [node, ] = this.get_node_with_parent(key)
        return node === null ? null : node.val
    }

    put(key, val) {
        let [node, parent] = this.get_node_with_parent(key)

        if (node === null && parent === null) {
            this.root = new Node(key, val)
        } else if (node === null) {
            if (key < parent.key) {
                parent.lft = new Node(key, val)
            } else {
                parent.rgt = new Node(key, val)
            }
        } else {
            node.val = val
        }
    }

    remove(key) {
        let [node, parent] = this.get_node_with_parent(key)

        if (node === null) return

        let heir = null

        if (node.lft !== null && node.rgy !== null) {
            [heir, parent] = [node.lft, node]

            while (heir.rgt) {
                [heir, parent] = [heir.rgt, node]
            }

            if (parent === node) {
                parent.lft = heir.lft
            } else {
                parent.rgt = heir.lft
            }

            [node.key, node.val] = [heir.key, heir.val]
        } else if (node.lft !== null) {
            heir = node.lft
            node.key = heir.key
            node.val = heir.val
            node.lft = heir.lft
            node.rgt = heir.rgt
        } else if (node.rgt !== null) {
            heir = node.rgt
            node.key = heir.key
            node.val = heir.val
            node.lft = heir.lft
            node.rgt = heir.rgt
        } else {
            if (node === this.root) {
                this.root = null
            } else {
                if (node === parent.lft) {
                    parent.lft = null
                } else {
                    parent.rgt = null
                }
            }

            heir = node
        }

        heir.key = null
        heir.val = null
        heir.lft = null
        heir.rgt = null
    }
}

exports.BinarySearchTree = BinarySearchTree
