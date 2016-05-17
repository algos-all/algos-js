let assert = require('assert')
let random = require('seedrandom')
let randint = require('../randint')

function check_empty_key_0 (ss) {
  it(ss.name + ' empty get, empty sset', function () {
    assert.equal(ss.get('') === null, true)
  })
}

function check_empty_key_1 (ss) {
  it(ss.name + ' empty get, non-empty sset', function () {
    ss.put('42', 42)
    assert.equal(ss.get('') === null, true)
  })
}

function check_single_letters (ss) {
  it(ss.name + ' single letters', function () {
    let letters = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < letters.length; ++i) {
      ss.put(letters[i], i)
    }

    for (let i = 0; i < letters.length; ++i) {
      assert.equal(ss.get(letters[i]), i)
    }
  })
}

function check_single_digits (ss) {
  it(ss.name + ' single digits', function () {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let i = 0; i < digits.length; ++i) {
      ss.put([digits[i]], i)
    }

    for (let i = 0; i < digits.length; ++i) {
      assert.equal(ss.get([digits[i]]), i)
    }
  })
}

function check_simple_chain (ss, n) {
  it(ss.name + ' check simple chain', function () {
    assert.equal(n > 0, true)

    for (let i = 1; i < n; ++i) {
      ss.put('i'.repeat(i), i)
    }

    for (let i = 1; i < n; ++i) {
      assert.equal(ss.get('i'.repeat(i)), i)
    }
  })
}

function check_words_0 (ss) {
  it(ss.name + ' a, aa, aaa, abbb', function () {
    let words = ['a', 'aa', 'aaa', 'abbb']

    for (let i = 0; i < words.length; ++i) {
      ss.put(words[i], i)
    }

    for (let i = 0; i < words.length; ++i) {
      assert.equal(ss.get(words[i]), i)
    }
  })
}

function check_words_1 (ss) {
  it(ss.name + ' c, cb, cc, ce', function () {
    let words = ['c', 'cb', 'cc', 'ce']

    for (let i = 0; i < words.length; ++i) {
      ss.put(words[i], i)
    }

    for (let i = 0; i < words.length; ++i) {
      assert.equal(ss.get(words[i]), i)
    }
  })
}

function check_words_2 (ss) {
  it(ss.name + ' good, go', function () {
    let words = ['good', 'go']

    for (let i = 0; i < words.length; ++i) {
      ss.put(words[i], i)
    }

    for (let i = 0; i < words.length; ++i) {
      assert.equal(ss.get(words[i]), i)
    }
  })
}

function check_words_3 (ss) {
  it(ss.name + ' b, a, c', function () {
    let words = ['b', 'a', 'c']

    for (let i = 0; i < words.length; ++i) {
      ss.put(words[i], i)
    }

    for (let i = 0; i < words.length; ++i) {
      assert.equal(ss.get(words[i]), i)
    }
  })
}

function check_words_4 (ss) {
  it(ss.name + ' b, a, c, ball, all, cya', function () {
    let words = ['b', 'a', 'c', 'ball', 'all', 'cya']

    for (let i = 0; i < words.length; ++i) {
      ss.put(words[i], i)
    }

    for (let i = 0; i < words.length; ++i) {
      assert.equal(ss.get(words[i]), i)
    }
  })
}

function check_random_words (ss, seed, n, m, alpha) {
  it(ss.name + ' check random words', function () {
    random(seed, {global: true})

    assert.equal(n >= 1 && m >= 1 && alpha.length !== 0, true)

    let [words, values] = [[], {}]
    for (let i = 0; i < n; ++i) {
      let word = ''
      for (let j = 0; j < randint(1, m); ++j) {
        word += alpha[randint(0, alpha.length - 1)]
      }
      words.push(word)
    }

    for (let i = 0; i < n; ++i) {
      ss.put(words[i], i)
      values[words[i]] = i
    }

    for (let i = 0; i < n; ++i) {
      assert.equal(ss.get(words[i]) === values[words[i]], true)
    }
  })
}

function check_gcp_empty_0 (ss) {
  it('check gcp with empty key 0', function () {
    assert.equal(ss.gcp(''), 0)
  })
}

function check_gcp_empty_1 (ss) {
  it('check gcp with empty key 1', function () {
    ss.put('a', 42)
    assert.equal(ss.gcp(''), 0)
  })
}

exports.check_gcp_0 = function (ss) {
  it('check gcp 0', function () {
    ss.put('a', 0)
    ss.put('b', 1)

    assert.equal(ss.gcp('c'), 0)
  })
}

exports.check_gcp_1 = function (ss) {
  it('check gcp 1', function () {
    ss.put('a', 0)
    ss.put('b', 1)
    ss.put('c', 2)

    assert.equal(ss.gcp('c'), 1)
  })
}

exports.check_gcp_2 = function (ss) {
  it('check gcp 2', function () {
    ss.put('a', 0)

    assert.equal(ss.gcp('a'), 1)
  })
}

exports.check_gcp_3 = function (ss) {
  it('check gcp 3', function () {
    ss.put('a', 0)

    assert.equal(ss.gcp('aa'), 1)
  })
}

exports.check_startswith_empty_0 = function (ss) {
  it('check startswith empty 0', function () {
    assert.deepEqual(ss.startswith(''), [])
  })
}

exports.check_startswith_empty_1 = function (ss) {
  it('check startswith empty 1', function () {
    let words = ['a', 'b', 'c']
    for (let i = 0; i < words.length; ++i) {
      ss.put(words[i], i)
    }

    let result = ss.startswith('')

    for (let i = 0; i < words.length; ++i) {
      assert.equal(result.indexOf(words[i]) > -1, true)
    }
  })
}

exports.check_startswith_0 = function (ss) {
  it('check startswith 0', function () {
    ss.put('a', 0)

    assert.deepEqual(ss.startswith('a'), ['a'])
  })
}

exports.check_startswith_1 = function (ss) {
  it('check startswith 1', function () {
    let words = ['a', 'b']
    for (let i = 0; i < words.length; ++i) {
      ss.put(words[i], i)
    }

    for (let i = 0; i < words.length; ++i) {
      assert.deepEqual(ss.startswith(words[i]), [words[i]])
    }
  })
}

exports.check_startswith_2 = function (ss) {
  it('check startswith 2', function () {
    let words = ['help', 'hell']
    for (let i = 0; i < words.length; ++i) {
      ss.put(words[i], i)
    }

    let result = ss.startswith('hel')

    for (let i = 0; i < words.length; ++i) {
      assert.equal(result.indexOf(words[i]) > -1, true)
    }
  })
}

exports.check_startswith_3 = function (ss) {
  it('check startswith 2', function () {
    ss.put('help', 0)

    assert.deepEqual(ss.startswith('hell'), [])
    assert.deepEqual(ss.startswith('helpme'), [])
  })
}

exports.check_empty_key_0 = check_empty_key_0
exports.check_empty_key_1 = check_empty_key_1

exports.check_single_letters = check_single_letters
exports.check_single_digits = check_single_digits

exports.check_simple_chain = check_simple_chain

exports.check_words_1 = check_words_1
exports.check_words_2 = check_words_2
exports.check_words_3 = check_words_3
exports.check_words_4 = check_words_4

exports.check_random_words = check_random_words

exports.check_gcp_empty_0 = check_gcp_empty_0
exports.check_gcp_empty_1 = check_gcp_empty_1
