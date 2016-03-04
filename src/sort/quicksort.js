function swap(xs, i, j) {
	var t = xs[i];
	xs[i] = xs[j];
	xs[j] = t;
}

function irandom(min, max) {
	return Math.floor(
		Math.random() * (max - min + 1) + min
	);
}


function qsort0(xs) {
	function qsort(xs, fst, lst) {
		if (fst >= lst)
			return undefined;

		var i = fst, j = lst;
		var pivot = xs[irandom(fst, lst)];

		while (i <= j) {
			for (; xs[i] < pivot; i++);
			for (; xs[j] > pivot; j--);

			if (i <= j) {
				swap(xs, i, j);
				i++, j--;
			}
		}

		qsort(xs, fst, j);
		qsort(xs, i, lst);
	}

	if (xs === undefined)
		return undefined;

	qsort(xs, 0, xs.length - 1);
}


function qsort1(xs) {
	function qsort(xs, fst, lst) {
		if (fst >= lst)
			return undefined;

		var i = fst, j = lst;
		var pivot = xs[irandom(fst, lst)];

		while (i <= j) {
			for (; xs[i] < pivot; i++);
			for (; xs[j] > pivot; j--);

			if (i > j) break;

			swap(xs, i, j);
			i++, j--;
		}

		qsort(xs, fst, j);
		qsort(xs, i, lst);
	}

	if (xs === undefined)
		return undefined;

	qsort(xs, 0, xs.length - 1);
}


function qsort3(xs) {
	function qsort(xs, fst, lst) {
		if (fst >= lst)
			return;

		var i = fst, j = lst;
		var p = fst, q = lst;
		var pivot = xs[irandom(fst, lst)];

		while (i <= j) {
			while (i <= j && xs[i] <= pivot) {
				if (xs[i] === pivot) {
					swap(xs, i, p);
					p++;
				}
				i++;
			}
			while (i <= j && xs[j] >= pivot) {
				if (xs[j] === pivot) {
					swap(xs, j, q);
					q--;
				}
				j--;
			}

			if (i <= j) {
				swap(xs, i, j);
				i++, j--;
			}
		}

		for (var k = fst; k < p; k++) {
			swap(xs, k, j);
			j--;
		}
		for (var k = q + 1; k < lst + 1; k++) {
			swap(xs, k, i);
			i++;
		}

		qsort(xs, fst, j);
		qsort(xs, i, lst);
	}

	if (xs === undefined)
		return undefined;

	qsort(xs, 0, xs.length - 1);
}


exports.qsort0 = qsort0;
exports.qsort1 = qsort1;
exports.qsort3 = qsort3;
