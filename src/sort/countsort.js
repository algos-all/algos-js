function countsort0(xs) {
	function csort(xs, lo, hi) {
		var ys = [];
		for (var i = 0; i < xs.length; ++i)
			ys[i] = 0;

		var counts = [];
		for (var i = 0; i < hi - lo + 1; ++i)
			counts[i] = 0;

		for (var x of xs)
			counts[xs - lo + 1]++;

		for (var i = 1; i < counts.length; ++i)
			counts[i] += counts[i - 1];

		for (var x of xs) {
			ys[counts[x - lo]] = x;
			counts[x - lo]++;
		}

		return ys;
	}

	if (xs === undefined)
		return undefined;

	return csort(xs, Math.min(xs), Math.max(xs));
}


exports.countsort0 = countsort0;
