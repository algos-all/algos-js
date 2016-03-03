var assert = require("assert");

var cs = require("./check_sort.js");
var sort = require("../../src/sort/mergesort.js");

describe("Test mergesort", function() {
	var sorts = [sort.mergesort0, sort.mergesort1];

	describe("on empty array", function() {
		for (var sort of sorts) {
			it(sort.name + ', inplace array', function() {
				var xs = sort([]);
				assert.deepEqual(xs, []);
			});

			it(sort.name + ', separate array', function() {
				var xs = [];

				var ys = sort(xs);
				assert.deepEqual(xs, ys);
			});
		}
	});

	describe("on sorted input", function() {
		for (var sort of sorts) {
			for (var n = 1; n < 100; n++) {
				cs.check_on_sorted(sort, n);
			}
		}
	});

	describe("on random input", function() {
		for (var sort of sorts) {
			for (var n = 1; n < 100; n++) {
				for (var i = 0; i < 10; i++) {
					cs.check_on_random(sort, n, i);
				}
			}
		}
	});
});
