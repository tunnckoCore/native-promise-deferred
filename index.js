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
