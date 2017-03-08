function randint (imin, imax) {
  return Math.floor(Math.random() * (imax - imin + 1)) + imin
}

module.exports = randint
