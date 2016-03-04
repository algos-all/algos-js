function mergesort0(xs) {
	function mergesort(xs, fst, lst) {
		var ys = xs.slice(fst, lst);

		if (ys.length <= 1)
			return ys;

		var n = Math.floor(ys.length / 2);
		var m = ys.length;

		var ls = mergesort(ys, 0, n);
		var rs = mergesort(ys, n, m);

		var li = 0, ri = 0;
		while (li < ls.length && ri < rs.length) {
			if (ls[li] < rs[ri]) {
				ys[li + ri] = ls[li];
				li++;
			} else {
				ys[li + ri] = rs[ri];
				ri++;
			}
		}

		for (var i = li; i < ls.length; ++i)
			ys[i + ri] = ls[i];
		for (var i = ri; i < rs.length; ++i)
			ys[li + i] = rs[i];

		return ys;
	}

	if (xs === undefined)
		return undefined;

	return mergesort(xs, 0, xs.length);
}


function mergesort1(xs) {
	if (xs === undefined || xs.length <= 1)
		return undefined;

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
