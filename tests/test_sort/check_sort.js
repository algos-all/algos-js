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

function check_on_sorted(sort, n, reversed) {
	var xs = [], ys = [];
	if (!reversed) {
		for (var i = 0; i < n; ++i)
			xs[i] = i;
	} else {
		for (var i = n - 1; i >= 0; --i)
			xs[i] = i;
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
			assert.equal(issorted(xs), true);
			assert.equal(issorted(ys), true);
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
			assert.equal(issorted(xs), true);
			assert.equal(issorted(ys), true);
		});
	}
}

exports.check_on_sorted = check_on_sorted;
exports.check_on_random = check_on_random;
