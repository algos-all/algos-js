let assert = require('assert')

var module = require('../src/binsearch.js')

let check_bsearch = function(bsearch, xs, x, i) {
    xs = xs.slice()

    it(bsearch.name + ' ' + x + ' ' + i, function() {
        assert.equal(bsearch(xs, x), i)
    })
}

describe('Test binsearch', function () {
    let binsearch = module.binsearch

    it(binsearch.name + ' on an empty array', function() {
        assert.equal(binsearch([], 42), null)
    })

    describe('on a sorted array', function() {
        let xs = []

        for (let i = 0; i < 50; ++i) {
            xs[i] = 2 * i

            for (let j = 0; j <= i; ++j) {
                check_bsearch(binsearch, xs, 2 * j, j)
                check_bsearch(binsearch, xs, 2 * j + 1, null)

                check_bsearch(binsearch, xs, -1, null)
                check_bsearch(binsearch, xs, -2, null)

                check_bsearch(binsearch, xs, 2 * i + 1, null)
                check_bsearch(binsearch, xs, 2 * i + 2, null)
            }
        }
    })
})

describe('Test lower_bound', function() {
    let lower_bound = module.lower_bound

    it(lower_bound.name + ' on an empty array ', function() {
        assert.equal(lower_bound([], 42), 0)
    })

    it(lower_bound.name + ' on a single element', function() {
        assert.equal(lower_bound([42], 40), 0)
        assert.equal(lower_bound([42], 42), 0)
        assert.equal(lower_bound([42], 44), 1)
    })

    describe(lower_bound.name + ' on a sorted array', function() {
        let xs = []

        for (let i = 0; i !== 50; ++i) {
            xs[i] = 2 * i

            for (let j = 0; j !== i; ++j) {
                check_bsearch(lower_bound, xs, 2 * j, j)
                check_bsearch(lower_bound, xs, 2 * j + 1, j + 1)

                check_bsearch(lower_bound, xs, -1  , 0)
                check_bsearch(lower_bound, xs, 1000, xs.length)
            }
        }
    })

    it(lower_bound.name + ' on continuous', function() {
        let xs = [-2, -2, -2, 2, 2, 2, 2]

        assert.equal(lower_bound(xs.slice(), -3), 0)
        assert.equal(lower_bound(xs.slice(), -2), 0)
        assert.equal(lower_bound(xs.slice(), -1), 3)
        assert.equal(lower_bound(xs.slice(),  0), 3)
        assert.equal(lower_bound(xs.slice(),  2), 3)
        assert.equal(lower_bound(xs.slice(), 10), xs.length)
    })
})

describe('Test upper_bound', function() {
    let upper_bound = module.upper_bound

    it(upper_bound.name + ' on an empty array ', function() {
        assert.equal(upper_bound([], 42), 0)
    })

    it(upper_bound.name + ' on a single element', function() {
        assert.equal(upper_bound([42], 40), 0)
        assert.equal(upper_bound([42], 42), 1)
        assert.equal(upper_bound([42], 44), 1)
    })

    describe(upper_bound.name + ' on a sorted array', function() {
        let xs = []

        for (let i = 0; i !== 50; ++i) {
            xs[i] = 2 * i

            for (let j = 0; j !== i; ++j) {
                check_bsearch(upper_bound, xs, 2 * j - 1, j)
                check_bsearch(upper_bound, xs, 2 * j, j + 1)


                check_bsearch(upper_bound, xs, -1  , 0)
                check_bsearch(upper_bound, xs, 1000, xs.length)
            }
        }
    })

    it(upper_bound.name + ' on continuous', function() {
        let xs = [-2, -2, -2, 2, 2, 2, 2]

        assert.equal(upper_bound(xs.slice(), -3), 0)
        assert.equal(upper_bound(xs.slice(), -2), 3)
        assert.equal(upper_bound(xs.slice(), -1), 3)
        assert.equal(upper_bound(xs.slice(),  0), 3)
        assert.equal(upper_bound(xs.slice(),  2), xs.length)
        assert.equal(upper_bound(xs.slice(), 10), xs.length)
    })
})
