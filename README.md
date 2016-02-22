# promise-delay
like Promise.resolve with a delay in milliseconds

[![Circle CI](https://circleci.com/gh/jden/node-promise-delay.svg?style=svg)](https://circleci.com/gh/jden/node-promise-delay)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

**Note**: For node 0.10 support, use promise-delay@1.x to include [polyfill-promise](http://npm.im/polyfill-promise)


## usage
```js
var promiseDelay = require('promise-delay')

var eventually = promiseDelay(100, Promise.resolve('foo'))

eventually.then(next)

// you can also cast non-Promises to delayed promises

var later = promiseDelay(100, false)

later.then(function (val) {
    console.log(val)
    // => false
  })
```

or, reject after a delay:
```js
var rejected = promiseDelay.reject(100, new Error('rejected'))

rejected.catch(function (err) {
  console.log(err)
  // Error: rejected
})
```


## installation

    $ npm install promise-delay


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
