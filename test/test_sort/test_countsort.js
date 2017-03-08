var assert = require('assert')

var cs = require('./check_sort.js')
var sort = require('../../src/sort/countsort.js')

describe('Test quicksort', function() {
    var sorts = [sort.countsort0]

    describe('on no arguments', function() {
        for (var sort of sorts) {
            it(sort.name, function() {
                assert.equal(sort(), undefined)
            })
        }
    })

    describe('on empty array', function() {
        for (var sort of sorts) {
            cs.check_on_empty(sort)
        }
    })

    describe('on sorted input', function() {
        for (var sort of sorts) {
            for (var n = 1; n < 100; n++) {
                cs.check_on_sorted(sort, n)
            }
        }
    })

    describe('on random input', function() {
        for (var sort of sorts) {
            for (var n = 1; n < 100; n++) {
                for (var i = 0; i < 10; i++) {
                    cs.check_on_random(sort, n, i)
                }
            }
        }
    })
})
