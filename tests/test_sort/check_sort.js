var assert = require("assert");
var random = require("seedrandom");

function issorted(xs) {
	for (var i = 1; i < xs.length; ++i) {
		if (xs[i - 1] > xs[i])
			return false;
	}

	return true;
}

function irandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function check_on_empty(sort) {
	it(sort.name + ', inplace array', function() {
		var xs = sort([]);
		assert.equal(xs === undefined || xs.length === 0, true);
	});

	it(sort.name + ', separate array', function() {
		var xs = [];

		var ys = sort(xs);
		if (ys === undefined) {
			assert.deepEqual(xs, []);
		} else {
			assert.deepEqual(xs, []);
			assert.deepEqual(ys, []);
		}
	});
}

function check_on_sorted(sort, n, reversed) {
	var xs = [];
	if (!reversed) {
		for (var i = 0; i < n; ++i)
			xs[i] = i;
	} else {
		for (var i = n - 1; i >= 0; --i)
			xs[i] = i;
	}

	var ys = [];
	for (var i = 0; i < n; ++i)
		ys[i] = i;

	var zs = xs.slice();

	var rs = sort(xs);

	if (rs === undefined) {
		it(sort.name + ", length " + n, function() {
			assert.deepEqual(xs, ys);

			assert.equal(issorted(xs), true);
		});
	} else {
		it(sort.name + ", length " + n, function() {
			assert.deepEqual(xs, zs);
			assert.deepEqual(rs, ys);

			assert.equal(issorted(rs), true);
		});
	}
}


function check_on_random(sort, n, seed) {
	random(seed, {global: true});

	var xs = [], ys = [];
	for (var i = 0; i < n; ++i) {
		xs[i] = irandom(-1024, 1024);
	}

	var zs = xs.slice();

	ys = sort(xs);

	if (ys === undefined) {
		it(sort.name + ", length " + n, function() {
			assert.equal(issorted(xs), true);
		});
	} else {
		it(sort.name + ", length " + n, function() {
			assert.deepEqual(xs, zs);
			assert.equal(issorted(ys), true);
		});
	}
}

exports.check_on_empty  = check_on_empty;
exports.check_on_sorted = check_on_sorted;
exports.check_on_random = check_on_random;
