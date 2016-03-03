function mergesort0(xs) {
	if (xs === undefined || xs.length <= 1)
		return xs

	var n = Math.floor(xs.length / 2);
	var m = xs.length;

	var ls = mergesort0(xs.slice(0, n));
	var rs = mergesort0(xs.slice(n, m));

	var li = 0, ri = 0;
	while (li < ls.length && ri < rs.length) {
		if (ls[li] < rs[ri]) {
			xs[li + ri] = ls[li];
			li++;
		} else {
			xs[li + ri] = rs[ri];
			ri++;
		}
	}

	for (var i = li; i < ls.length; ++i)
		xs[i + ri] = ls[i];
	for (var i = ri; i < rs.length; ++i)
		xs[li + i] = rs[i];

	return xs
}


function mergesort1(xs) {
	if (xs === undefined || xs.length <= 1)
		return xs

	var step = 1;

	while (step < xs.length) {
		for (var n = 0; n < xs.length - step; n += 2 * step) {
			var ls = xs.slice(n, n + step);
			var rs = xs.slice(n + step, n + 2 * step);

			var li = 0, ri = 0;

			while (li < ls.length && ri < rs.length) {
				if (ls[li] < rs[ri]) {
					xs[n + li + ri] = ls[li];
					li++;
				} else {
					xs[n + li + ri] = rs[ri];
					ri++;
				}
			}

			for (var i = li; i < ls.length; ++i)
				xs[n + i + ri] = ls[i];
			for (var i = ri; i < rs.length; ++i)
				xs[n + li + i] = rs[i];
		}

		step *= 2;
	}
}

exports.mergesort0 = mergesort0;
exports.mergesort1 = mergesort1;
