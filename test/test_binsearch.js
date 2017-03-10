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
