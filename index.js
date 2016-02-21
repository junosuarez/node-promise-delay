try {
 // optional dependency on polyfill-promise
 global.Promise = global.Promise || require('polyfill-promise')
} finally {}

function promiseDelay (delay, val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val)
    }, delay)
  })

}

module.exports = promiseDelay
