/* globals describe, it */
var expect = require('mochi').expect

describe('promise-delay', function () {
  var promiseDelay = require('../')

  it('delays a promise', function (end) {
    var start = Date.now()

    promiseDelay(100, Promise.resolve(10))
      .then(function (val) {
        val.should.equal(10)
        var elapsed = Date.now() - start

        expect(elapsed).to.be.within(90, 110)
      })
      .then(end, end)
  })

  it('casts', function (end) {
    promiseDelay(10, 'hi')
      .then(function (val) {
        expect(val).to.equal('hi')
      })
      .then(end, end)
  })
})
