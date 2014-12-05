# promise-delay
like Promise.cast with a delay in milliseconds

## usage
```js
var promiseDelay = require('promise-delay')

var eventually = promiseDelay(100, Promise.cast('foo'))

eventually.then(next)

// you can also cast non-Promises to delayed promises

var later = promiseDelay(100, false)

later.then(function (val) {
    console.log(val)
    // => false
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
