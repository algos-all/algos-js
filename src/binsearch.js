function binsearch (xs, v) {
    if (xs === undefined || xs.length === 0) { return null }

    let lo = 0, hi = xs.length - 1

    while (lo <= hi) {
        let i = (lo + hi) / 2 | 0

        if (xs[i] === v) {
            return i
        } else if (v < xs[i]) {
            hi = i - 1
        } else if (v > xs[i]) {
            lo = i + 1
        }
    }

    return null
}

function lower_bound(xs, val, compare) {
    if (xs === undefined || val === undefined) {
        return null
    }

    if (compare === undefined) {
        compare = (x, y) => {return x < y}
    }

    let [fst, lst] = [0, xs.length - 1]
    while (fst <= lst) {
        const mid = fst + (lst - fst) / 2 | 0

        if (compare(xs[mid], val)) {
            fst = mid + 1
        } else {
            lst = mid - 1
        }
    }

    return fst
}

function upper_bound(xs, val, compare) {
    if (xs === undefined || val === undefined) {
        return null
    }

    if (compare === undefined) {
        compare = (x, y) => {return x <= y}
    }

    let [fst, lst] = [0, xs.length - 1]
    while (fst <= lst) {
        const mid = fst + (lst - fst) / 2 | 0

        if (compare(xs[mid], val)) {
            fst = mid + 1
        } else {
            lst = mid - 1
        }
    }

    return fst
}

exports.binsearch = binsearch
exports.lower_bound = lower_bound
exports.upper_bound = upper_bound
