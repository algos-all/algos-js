let assert = require('assert')
let random = require('seedrandom')

let randint = require('../../src/random').randint

function issorted (xs) {
    for (let i = 1; i < xs.length; ++i) {
        if (xs[i - 1] > xs[i]) { return false }
    }

    return true
}

function check_on_empty (sort) {
    it(sort.name + ', inplace array', function () {
        let xs = sort([])
        assert.equal(xs === undefined || xs.length === 0, true)
    })

    it(sort.name + ', separate array', function () {
        let xs = []

        let ys = sort(xs)
        if (ys === undefined) {
            assert.deepEqual(xs, [])
        } else {
            assert.deepEqual(xs, [])
            assert.deepEqual(ys, [])
        }
    })
}

function check_on_sorted (sort, n, reversed) {
    let xs = []
    if (!reversed) {
        for (let i = 0; i < n; ++i) { xs[i] = i }
    } else {
        for (let i = n - 1; i >= 0; --i) { xs[i] = i }
    }

    let ys = []
    for (let i = 0; i < n; ++i) { ys[i] = i }

    let zs = xs.slice()

    let rs = sort(xs)

    if (rs === undefined) {
        it(sort.name + ', length ' + n, function () {
            assert.deepEqual(xs, ys)

            assert.equal(issorted(xs), true)
        })
    } else {
        it(sort.name + ', length ' + n, function () {
            assert.deepEqual(xs, zs)
            assert.deepEqual(rs, ys)

            assert.equal(issorted(rs), true)
        })
    }
}

function check_on_random (sort, n, seed) {
    random(seed, {global: true})

    let [xs, ys] = [[], []]
    for (let i = 0; i < n; ++i) {
        xs[i] = randint(-1024, 1024)
    }

    let zs = xs.slice()

    ys = sort(xs)

    if (ys === undefined) {
        it(sort.name + ', length ' + n, function () {
            assert.equal(issorted(xs), true)
        })
    } else {
        it(sort.name + ', length ' + n, function () {
            assert.deepEqual(xs, zs)
            assert.equal(issorted(ys), true)
        })
    }
}

exports.check_on_empty = check_on_empty
exports.check_on_sorted = check_on_sorted
exports.check_on_random = check_on_random
