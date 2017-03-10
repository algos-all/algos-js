/**
 * Generate uniform random integers in the range [imin, imax]
 */
function randint (imin, imax) {
    return Math.floor(Math.random() * (imax - imin + 1)) + imin
}

module.exports.randint = randint

/**
 * Generate uniform random integers in the range [imin, imax)
 */
function randrange(imin, imax) {
    return Math.floor(Math.random() * (imax - imin)) + imin
}

module.exports.randrange = randrange

/**
 * Shuffle the contents of xs uniformly, in-place and in O(n)
 *
 * Uses the Fisher–Yates (Knuth) Shuffle
 */
function shuffle(xs) {
    for (let i = xs.length; i != 0; --i) {
        let j = Math.floor(Math.random() * i);
        [xs[i], xs[j]] = [xs[j], xs[i]]
    }
}

module.exports.shuffle = shuffle
