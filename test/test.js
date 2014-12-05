var mochi = require('mochi')

describe('promise-delay', function () {
  var promiseDelay = require('../')
  
  it('delays a promise', function (end) {

    var start = Date.now()

    promiseDelay(100, Promise.cast(10))
      .then(function (val) {
        val.should.equal(10)
        var elapsed = Date.now() - start

        elapsed.should.be.within(90, 110)
      })
      .then(end, end)
  })

  it('casts', function (end) {
  
    promiseDelay(10, 'hi')
      .then(function (val) {
        val.should.equal('hi')
      })
      .then(end, end)
  
  })
})
