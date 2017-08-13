function binsearch (xs, val) {
    if (xs === undefined || xs.length === 0) {
        return null
    }

    let [fst, lst] = [0, xs.length - 1]
    while (fst <= lst) {
        let mid = fst + (lst - fst) / 2 | 0

        if (xs[mid] === val) {
            return mid
        }

        if (val < xs[mid]) {
            lst = mid - 1
        } else {
            fst = mid + 1
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
