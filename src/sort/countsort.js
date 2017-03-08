function countsort0(xs) {
    function csort(xs, mi, ma) {
        let ys = []
        for (let i = 0; i < xs.length; ++i)
            ys[i] = 0

        let cs = []
        for (let i = 0; i < ma - mi + 2; ++i)
            cs[i] = 0

        for (let x of xs)
            cs[x - mi + 1]++

        for (let i = 1; i < cs.length; ++i)
            cs[i] += cs[i - 1]

        for (let x of xs) {
            ys[cs[x - mi]] = x
            cs[x - mi]++
        }

        return ys
    }

    if (xs === undefined)
        return undefined

    if (xs.length == 0)
        return []

    let mi = xs[0], ma = xs[0]

    for (let x of xs) {
        if (x < mi)
            mi = x
        if (x > ma)
            ma = x
    }

    return csort(xs, mi, ma)
}


exports.countsort0 = countsort0
