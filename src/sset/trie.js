class Node {
  constructor () {
    this.edges = {}
    this.val = null
  }

  put (key, val, i) {
    let self = this

    for (let n = i; n < key.length; ++n) {
      if (self.edges[key[n]] === undefined) {
        self.edges[key[n]] = new Node()
      }

      self = self.edges[key[n]]
    }

    self.val = val
  }

  get_node_with_parent (key) {
    let [self, parent] = [this, null]

    for (let i = 0; i < key.length; ++i) {
      if (self.edges[key[i]] === undefined) {
        return [self, parent, i]
      }

      [self, parent] = [self.edges[key[i]], self]
    }

    return [self, parent, key.length]
  }

  get (key) {
    let [node, _, i] = this.get_node_with_parent(key)
    return key.length !== i ? null : node.val
  }
}

class Trie {
  constructor () {
    this.root = null
  }

  get_node_with_parent(key) {
    if (this.root === null) { return [null, null, 0] }
    return this.root.get_node_with_parent(key)
  }

  get (key) {
    return this.root === null ? null : this.root.get(key)
  }

  put (key, val) {
    let [node, parent, i] = this.get_node_with_parent(key)

    if (node === null && parent === null) {
      this.root = new Node()
      node = this.root
    }

    node.put(key, val, i)
  }
}

exports.Trie = Trie
