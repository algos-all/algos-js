function mergesort0(xs) {
    function mergesort(xs, fst, lst) {
        let ys = xs.slice(fst, lst)

        if (ys.length <= 1)
            return ys

        let n = Math.floor(ys.length / 2)
        let m = ys.length

        let ls = mergesort(ys, 0, n)
        let rs = mergesort(ys, n, m)

        let li = 0, ri = 0
        while (li < ls.length && ri < rs.length) {
            if (ls[li] < rs[ri]) {
                ys[li + ri] = ls[li]
                li++
            } else {
                ys[li + ri] = rs[ri]
                ri++
            }
        }

        for (let i = li; i < ls.length; ++i)
            ys[i + ri] = ls[i]
        for (let i = ri; i < rs.length; ++i)
            ys[li + i] = rs[i]

        return ys
    }

    if (xs === undefined)
        return undefined

    return mergesort(xs, 0, xs.length)
}


function mergesort1(xs) {
    if (xs === undefined || xs.length <= 1)
        return undefined

    let step = 1

    while (step < xs.length) {
        for (let n = 0; n < xs.length - step; n += 2 * step) {
            let ls = xs.slice(n, n + step)
            let rs = xs.slice(n + step, n + 2 * step)

            let li = 0, ri = 0

            while (li < ls.length && ri < rs.length) {
                if (ls[li] < rs[ri]) {
                    xs[n + li + ri] = ls[li]
                    li++
                } else {
                    xs[n + li + ri] = rs[ri]
                    ri++
                }
            }

            for (let i = li; i < ls.length; ++i)
                xs[n + i + ri] = ls[i]
            for (let i = ri; i < rs.length; ++i)
                xs[n + li + i] = rs[i]
        }

        step *= 2
    }
}

exports.mergesort0 = mergesort0
exports.mergesort1 = mergesort1
