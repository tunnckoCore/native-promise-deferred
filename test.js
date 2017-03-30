/*!
 * native-promise-deferred <https://github.com/tunnckoCore/native-promise-deferred>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var Deferred = require('./index')

test('should return a promise have `.resolve` and `.reject` methods too', function (done) {
  var promise = Deferred()

  test.strictEqual(typeof promise.then, 'function')
  test.strictEqual(typeof promise.catch, 'function')
  test.strictEqual(typeof promise.reject, 'function')
  test.strictEqual(typeof promise.resolve, 'function')
  done()
})

test('should resolve a value and handle it in .then method', function (done) {
  var promise = new Deferred()
  promise.then(function (res) {
    test.strictEqual(res, 123)
    done()
  }, done).catch(done)
  promise.resolve(123)
})

test('should `.catch` an error from rejected promise', function (done) {
  var promise = new Deferred()

  promise.catch(function (er) {
    test.strictEqual(er instanceof Error, true)
    test.strictEqual(er.name, 'TypeError')
    test.strictEqual(er.message, 'foo bar baz')
    done()
  })

  promise.reject(new TypeError('foo bar baz'))
})
