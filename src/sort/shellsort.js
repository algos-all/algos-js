function shellsort(xs) {
    if (xs === undefined || xs.length <= 1)
        return

    let m = 1, n = xs.length
    while (m < Math.floor(n / 3))
        m = 3 * m + 1

    while (m > 0) {
        for (let i = m; i < n; ++i) {
            for (let j = i; j > m - 1; j -= m) {
                if (xs[j - m] <= xs[j])
                    break

                let t = xs[j - m]
                xs[j - m] = xs[j]
                xs[j] = t
            }
        }

        m = Math.floor(m / 3)
    }
}

exports.shellsort = shellsort
