require('polyfill-promise')

function promiseDelay (delay, val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val)
    }, delay)
  })

}

module.exports = promiseDelay
