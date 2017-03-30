/*!
 * native-promise-deferred <https://github.com/tunnckoCore/native-promise-deferred>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var extend = require('extend-shallow')
var Promize = require('native-or-another')
var register = require('native-or-another/register')

/**
 * > Acts and works like a `Promise` constructor, but instead
 * of accepting `resolver` function like `function (resolve, reject) {}` it
 * accepts an `options` optional object that is allows
 * you to pass custom Promise constructor for `options.Promise` when
 * there's no support for native promise in the used environment.
 *
 * **Example**
 *
 * ```js
 * const Deferred = require('native-promise-deferred')
 *
 * const promise = new Deferred()
 *
 * promise.then((res) => {
 *   console.log('result:', res) // => 123
 * })
 * promise.resolve(123)
 *
 * // or passing custom promise
 * // for nodejs < v0.12 where no native promise support
 *
 * const Bluebird = require('bluebird')
 * const customPromise = new Deferred({ Promise: Bluebird })
 *
 * customPromise.catch((er) => console.log('ERR!', er))
 * // => ERR! Error: foo bar
 *
 * customPromise.reject(new Error('foo bar'))
 * ```
 *
 * @name   Deferred
 * @param  {Object} `options` directly passed to [native-or-another][]'s "register"
 * @param  {Boolean} `options.global` pass `false` to disable registering it as `global.Promise`
 * @return {Promise} a standard Promise object with `.resolve` and `.reject` methods
 * @api public
 */

module.exports = function Deferred (options) {
  options = extend({ Promise: Promize }, options)
  options.Promise = register(options)

  var promise = {}
  var p = new options.Promise(function (resolve, reject) {
    promise.resolve = resolve
    promise.reject = reject
  })

  return extend(p, promise)
}
