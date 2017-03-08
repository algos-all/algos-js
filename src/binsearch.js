function binsearch (xs, v) {
    if (xs === undefined || xs.length === 0) { return null }

    var lo = 0
    var hi = xs.length - 1

    while (lo <= hi) {
        var i = (lo + hi) / 2 | 0

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

exports.binsearch = binsearch
