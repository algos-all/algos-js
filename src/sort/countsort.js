var assert = require("assert");

function countsort0(xs) {
	function csort(xs, mi, ma) {
		var ys = [];
		for (var i = 0; i < xs.length; ++i)
			ys[i] = 0;

		var cs = [];
		for (var i = 0; i < ma - mi + 2; ++i)
			cs[i] = 0;

		for (var x of xs)
			cs[x - mi + 1]++;

		for (var i = 1; i < cs.length; ++i)
			cs[i] += cs[i - 1];

		for (var x of xs) {
			ys[cs[x - mi]] = x;
			cs[x - mi]++;
		}

		return ys;
	}

	if (xs === undefined)
		return undefined;

	if (xs.length == 0)
		return [];

	var mi = xs[0], ma = xs[0];

	for (var x of xs) {
		if (x < mi)
			mi = x;
		if (x > ma)
			ma = x;
	}

	return csort(xs, mi, ma);
}


exports.countsort0 = countsort0;
