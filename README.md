# Module algos-js

[![Travis](https://img.shields.io/travis/all3fox/algos-js.svg)](https://travis-ci.org/all3fox/algos-js)
[![Coveralls](https://img.shields.io/coveralls/all3fox/algos-js.svg)](https://coveralls.io/github/all3fox/algos-js)
[![npm](https://img.shields.io/npm/v/algos-js.svg)](https://www.npmjs.com/package/algos-js)
[![license](https://img.shields.io/github/license/all3fox/algos-js.svg)](https://choosealicense.com/licenses/mit/)

## What is algos-js?

This is a small project that contains several common computer science algorithms. It helps
me both learn JavaScript and practice these algorithms along the way.

The project has a few tests implemented with the [mocha][1] testing framework. Continuous
integration is done with [travis][2] and code coverage is available at [coveralls][3]. The
default package manager is [yarn][6].

## How to install?

### Installing from GitHub

You would need to clone the project with `git` and install its dependencies with `yarn`:

```
git clone https://github.com/alisianoi/algos-js
cd algos-js
yarn install
```

## How to uninstall?

### After installing from GitHub

Remove the folder that you cloned from GitHub:

```
rm -rf algos-js
```

## What algorithms are ready?

<!-- 1. Binary search -->
<!-- TODO -->

<!-- ## How to install? -->

<!-- ### Installing from github -->

<!-- TODO -->

<!-- ### Installing from npm -->

<!-- TODO -->

## How to test?

To run all the unit tests and produce a coverage report:

```yarn run test```

To run all the unit tests manually without the coverage report:

```./node_modules/mocha/bin/mocha --recursive```

To run unit tests for a specific module:

```./node_modules/mocha/bin/mocha test/test_binsearch.js```

<!-- TODO -->

[1]: https://mochajs.org/
[2]: https://travis-ci.org
[3]: https://coveralls.io
[4]: https://git-scm.com/
[5]: https://github.com
[6]: https://yarnpkg.com/
