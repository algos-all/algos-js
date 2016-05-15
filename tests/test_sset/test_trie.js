let csset = require('./check_sset.js')
let trie = require('../../src/sset/trie.js')

describe('Test Trie', function () {
  describe('empty trie and empty key:', function () {
    csset.check_empty_key_0(new trie.Trie())
  })
  describe('non-empty trie and empty key:', function () {
    csset.check_empty_key_1(new trie.Trie())
  })
  describe('single letters, different values:', function () {
    csset.check_single_letters(new trie.Trie())
  })
  describe('single digits, different values', function () {
    csset.check_single_digits(new trie.Trie())
  })
  describe('simple chain', function () {
    csset.check_simple_chain(new trie.Trie(), 10)
  })
  describe('test words 1', function () {
    csset.check_words_1(new trie.Trie())
  })
  describe('test words 2', function () {
    csset.check_words_2(new trie.Trie())
  })
  describe('test words 3', function () {
    csset.check_words_3(new trie.Trie())
  })
  describe('test words 4', function () {
    csset.check_words_4(new trie.Trie())
  })
})
