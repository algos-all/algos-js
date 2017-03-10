let assert = require('assert')

var module = require('../src/bst.js')
var random = require('../src/random')

let BST = module.BinarySearchTree

function check_bst(bst, k2v) {
    it(bst.constructor.name + ' compare to another tree', function() {
        for (let [key, val] of k2v) {
            assert.equal(bst.get(key), val)
        }  
    })
}

function populate_both_maps(n, fst, lst, bst, k2v) {
    for (let i = 0; i < n; ++i) {
        let x = random.randint(fst, lst)

        k2v.set(x, x)
        bst.put(x, x)

        check_bst(bst, k2v)
    }
}

function check_bst_put_on_random(n, fst, lst) {
    let k2v = new Map()
    let bst = new BST()

    populate_both_maps(n, fst, lst, bst, k2v)

    check_bst(bst, k2v)
}

function check_bst_remove_on_random(n, fst, lst) {
    let k2v = new Map()
    let bst = new BST()

    populate_both_maps(n, fst, lst, bst, k2v)

    let keys = Array.from(k2v.keys())

    random.shuffle(keys)

    for (let i = 0; i < keys.length; ++i) {
        k2v.delete(keys[i])
        bst.remove(keys[i])

        check_bst(bst, k2v)
    }
}

describe('Test binary search tree', function () {
    let bst = new BST() // just to extract the name of the class

    it(bst.constructor.name + ' get() on an empty tree', function() {
        let bst = new BST()

        assert.equal(bst.get(42), null)
    })

    it(bst.constructor.name + ' get() on root', function() {
        let bst = new BST()

        bst.put(42, 42)

        assert.equal(bst.get(42), 42)

        assert.equal(bst.get(43), null)
        assert.equal(bst.get(41), null)

        assert.equal(bst.get(0), null)
        assert.equal(bst.get(-42), null)
    })

    it(bst.constructor.name + ' get() on root children', function() {
        let bst = new BST()

        bst.put(42, 42)
        bst.put(43, 43)
        bst.put(41, 41)

        assert.equal(bst.get(42), 42)

        assert.equal(bst.get(43), 43)
        assert.equal(bst.get(41), 41)

        assert.equal(bst.get(0), null)
        assert.equal(bst.get(-42), null)
    })

    it(bst.constructor.name + ' remove() on empty tree', function() {
        let bst = new BST()

        assert.equal(bst.remove(42), null)
    })

    it(bst.constructor.name + ' remove() on root', function() {
        let bst = new BST()

        bst.put(42, 42)

        bst.remove(42)

        assert.equal(bst.get(42), null)
    })

    it(bst.constructor.name + ' remove() on root with kids', function() {
        let bst = new BST()

        bst.put(42, 42)
        bst.put(41, 41)
        bst.put(43, 43)

        bst.remove(42)

        assert.equal(bst.get(42), null)
        assert.equal(bst.get(43), 43)
        assert.equal(bst.get(41), 41)
    })

    it(bst.constructor.name + ' remove() on leafs of root', function() {
        let bst = new BST()

        bst.put(42, 42)
        bst.put(41, 41)
        bst.put(43, 43)

        bst.remove(41)

        assert.equal(bst.get(41), null)
        assert.equal(bst.get(42), 42)
        assert.equal(bst.get(43), 43)

        bst.remove(43)

        assert.equal(bst.get(41), null)
        assert.equal(bst.get(42), 42)
        assert.equal(bst.get(43), null)
    })

    for (let i = 0; i < 10; ++i) {
        check_bst_put_on_random(100, -1024, 1024)
    }

    for (let i = 0; i < 10; ++i) {
        check_bst_remove_on_random(100, -1024, 1024)
    }
})

