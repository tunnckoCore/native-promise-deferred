# native-promise-deferred [![npm version][npmv-img]][npmv-url] [![github tags][ghtag-img]][ghtag-url] [![mit license][license-img]][license-url]

> A deferred Promise, using `native-or-another` behind and so it work on Node.js v0.10 too!

You might also be interested in [native-promise](https://github.com/tunnckocore/native-promise#readme).

## Quality 👌

> By using [commitizen][czfriendly-url] and [conventional commit messages][conventional-messages-url], 
maintaining meaningful [ChangeLog][changelogmd-url] 
and commit history based on [global conventions][conventions-url], 
following [StandardJS][standard-url] code style through [ESLint][eslint-url] and
having always up-to-date dependencies through integrations
like [GreenKeeper][gk-integration-url] and [David-DM][daviddm-url] service,
this package has top quality.

[![code climate][codeclimate-img]][codeclimate-url] 
[![code style][standard-img]][standard-url] 
[![commitizen friendly][czfriendly-img]][czfriendly-url] 
[![greenkeeper friendly][gkfriendly-img]][gkfriendly-url] 
[![dependencies][daviddm-deps-img]][daviddm-deps-url] 
<!-- uncomment when need -->
<!-- [![develop deps][daviddm-devdeps-img]][daviddm-devdeps-url] -->

## Stability 💯

> By following [Semantic Versioning][semver-url] through [standard-version][] releasing tool, 
this package is very stable and its tests are passing both on [Windows (AppVeyor)][appveyor-ci-url] 
and [Linux (CircleCI)][circle-ci-url] with results 
from 100% to [400%][absolute-coverage-url] test coverage, reported respectively
by [CodeCov][codecov-coverage-url] and [nyc (istanbul)][nyc-istanbul-url].

[![following semver][following-semver-img]][following-semver-url] 
[![semantic releases][strelease-img]][strelease-url] 
[![linux build][circle-img]][circle-url] 
[![windows build][appveyor-img]][appveyor-url] 
[![code coverage][codecov-img]][codecov-url] 
[![nyc coverage][istanbulcov-img]][istanbulcov-url] 

## Support :clap:

> If you have any problems, consider opening [an issue][open-issue-url],
ping me on twitter ([@tunnckoCore][tunnckocore-twitter-url]),
join the [support chat][supportchat-url] room
or queue a [live session][codementor-url] on CodeMentor with me.
If you don't have any problems, you're using it somewhere or
you just enjoy this product, then please consider [donating some cash][paypalme-url] at PayPal,
since this is [OPEN Open Source][opensource-project-url] project made
with :heart: at [Sofia, Bulgaria][bulgaria-url] 🇧🇬.

[![tunnckoCore support][supportchat-img]][supportchat-url] 
[![code mentor][codementor-img]][codementor-url] 
[![paypal donate][paypalme-img]][paypalme-url] 
[![NPM monthly downloads](https://img.shields.io/npm/dm/native-promise-deferred.svg?style=flat)](https://npmjs.org/package/native-promise-deferred) 
[![npm total downloads][downloads-img]][downloads-url] 

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](#api)
  * [Deferred](#deferred)
- [Related](#related)
- [Contributing](#contributing)
- [Building docs](#building-docs)
- [Running tests](#running-tests)
- [Author](#author)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install
Install with [npm](https://www.npmjs.com/)

```
$ npm install native-promise-deferred --save
```

or install using [yarn](https://yarnpkg.com)

```
$ yarn add native-promise-deferred
```

## Usage
> For more use-cases see the [tests](test.js)

```js
const Promise = require('native-promise-deferred')

const promise = new Promise()
promise.then((res) => console.log(res))
promise.resolve(123) // same as Promise.resolve(123)
```

## API

### [Deferred](index.js#L52)
> Acts and works like a `Promise` constructor, but instead of accepting `resolver` function like `function (resolve, reject) {}` it accepts an `options` optional object that is allows you to pass custom Promise constructor for `options.Promise` when there's no support for native promise in the used environment.

**Params**

* `options` **{Object}**: directly passed to [native-or-another][]'s "register"    
* `options.global` **{Boolean}**: pass `false` to disable registering it as `global.Promise`    
* `returns` **{Promise}**: a standard Promise object with `.resolve` and `.reject` methods  

**Example**

```js
const Deferred = require('native-promise-deferred')

const promise = new Deferred()

promise.then((res) => {
  console.log('result:', res) // => 123
})
promise.resolve(123)

// or passing custom promise
// for nodejs < v0.12 where no native promise support

const Bluebird = require('bluebird')
const customPromise = new Deferred({ Promise: Bluebird })

customPromise.catch((er) => console.log('ERR!', er))
// => ERR! Error: foo bar

customPromise.reject(new Error('foo bar'))
```

## Related
- [dush-no-chaining](https://www.npmjs.com/package/dush-no-chaining): A plugin that removes the emitter methods chaining support for `dush`, `base`, `minibase` or anything based on them | [homepage](https://github.com/tunnckocore/dush-no-chaining#readme "A plugin that removes the emitter methods chaining support for `dush`, `base`, `minibase` or anything based on them")
- [dush-router](https://www.npmjs.com/package/dush-router): A simple regex-based router for `dush`, `base`, `minibase` and anything based on them. Works on Browser and Node.js | [homepage](https://github.com/tunnckocore/dush-router#readme "A simple regex-based router for `dush`, `base`, `minibase` and anything based on them. Works on Browser and Node.js")
- [dush-tap-report](https://www.npmjs.com/package/dush-tap-report): A simple TAP report producer based on event system. A plugin for `dush` event emitter or anything based on it | [homepage](https://github.com/tunnckocore/dush-tap-report#readme "A simple TAP report producer based on event system. A plugin for `dush` event emitter or anything based on it")
- [dush](https://www.npmjs.com/package/dush): Microscopic & functional event emitter in ~260 bytes, extensible through plugins. | [homepage](https://github.com/tunnckocore/dush#readme "Microscopic & functional event emitter in ~260 bytes, extensible through plugins.")
- [gibon](https://www.npmjs.com/package/gibon): Functional client-side router in ~570 bytes, built on HTML5 History API | [homepage](https://github.com/tunnckocore/gibon#readme "Functional client-side router in ~570 bytes, built on HTML5 History API")
- [gruu](https://www.npmjs.com/package/gruu): Modern, small and powerful testing with TAP output and support for async/await, promises, callbacks, streams and observables, built on [always-done][]. | [homepage](https://github.com/tunnckocore/gruu#readme "Modern, small and powerful testing with TAP output and support for async/await, promises, callbacks, streams and observables, built on [always-done][].")
- [minibase](https://www.npmjs.com/package/minibase): Minimalist alternative for Base. Build complex APIs with small units called plugins. Works well with most of the already existing… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "Minimalist alternative for Base. Build complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [native-or-another](https://www.npmjs.com/package/native-or-another): Guaranteed way for getting a Promise. Always native Promise if available, otherwise looks for common promise libraries and loads which… [more](https://github.com/tunnckocore/native-or-another#readme) | [homepage](https://github.com/tunnckocore/native-or-another#readme "Guaranteed way for getting a Promise. Always native Promise if available, otherwise looks for common promise libraries and loads which is installed. Allows registering custom Promise implementation in node < 0.12 versions")
- [native-promise](https://www.npmjs.com/package/native-promise): Get native `Promise` or falsey value if not available. | [homepage](https://github.com/tunnckocore/native-promise#readme "Get native `Promise` or falsey value if not available.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue][open-issue-url].  
Please read the [contributing guidelines][contributing-url] for advice on opening issues, pull requests, and coding standards.  
If you need some help and can spent some cash, feel free to [contact me at CodeMentor.io][codementor-url] too.

**In short:** If you want to contribute to that project, please follow these things

1. Please DO NOT edit [README.md](README.md), [CHANGELOG.md][changelogmd-url] and [.verb.md](.verb.md) files. See ["Building docs"](#building-docs) section.
2. Ensure anything is okey by installing the dependencies and run the tests. See ["Running tests"](#running-tests) section.
3. Always use `npm run commit` to commit changes instead of `git commit`, because it is interactive and user-friendly. It uses [commitizen][] behind the scenes, which follows Conventional Changelog idealogy.
4. Do NOT bump the version in package.json. For that we use `npm run release`, which is [standard-version][] and follows Conventional Changelog idealogy.

Thanks a lot! :)

## Building docs
Documentation and that readme is generated using [verb-generate-readme][], which is a [verb][] generator, so you need to install both of them and then run `verb` command like that

```
$ npm install verbose/verb#dev verb-generate-readme --global && verb
```

_Please don't edit the README directly. Any changes to the readme must be made in [.verb.md](.verb.md)._

## Running tests
Clone repository and run the following in that cloned directory

```
$ npm install && npm test
```

## Author
**Charlike Mike Reagent**

+ [github/tunnckoCore](https://github.com/tunnckoCore)
+ [twitter/tunnckoCore](https://twitter.com/tunnckoCore)
+ [codementor/tunnckoCore](https://codementor.io/tunnckoCore)

## License
Copyright © 2017, [Charlike Mike Reagent](https://i.am.charlike.online). Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.3, on April 02, 2017._  
_Project scaffolded using [charlike][] cli._

[always-done]: https://github.com/hybridables/always-done
[base]: https://github.com/node-base/base
[charlike]: https://github.com/tunnckocore/charlike
[commitizen]: https://github.com/commitizen/cz-cli
[native-or-another]: https://github.com/tunnckocore/native-or-another
[standard-version]: https://github.com/conventional-changelog/standard-version
[verb-generate-readme]: https://github.com/verbose/verb-generate-readme
[verb]: https://github.com/verbose/verb

[license-url]: https://github.com/tunnckoCore/native-promise-deferred/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/native-promise-deferred.svg

[downloads-url]: https://www.npmjs.com/package/native-promise-deferred
[downloads-img]: https://img.shields.io/npm/dt/native-promise-deferred.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/native-promise-deferred
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/native-promise-deferred.svg

[circle-url]: https://circleci.com/gh/tunnckoCore/native-promise-deferred
[circle-img]: https://img.shields.io/circleci/project/github/tunnckoCore/native-promise-deferred/master.svg?label=linux

[appveyor-url]: https://ci.appveyor.com/project/tunnckoCore/native-promise-deferred
[appveyor-img]: https://img.shields.io/appveyor/ci/tunnckoCore/native-promise-deferred/master.svg?label=windows

[codecov-url]: https://codecov.io/gh/tunnckoCore/native-promise-deferred
[codecov-img]: https://img.shields.io/codecov/c/github/tunnckoCore/native-promise-deferred/master.svg?label=codecov

[daviddm-deps-url]: https://david-dm.org/tunnckoCore/native-promise-deferred
[daviddm-deps-img]: https://img.shields.io/david/tunnckoCore/native-promise-deferred.svg

[daviddm-devdeps-url]: https://david-dm.org/tunnckoCore/native-promise-deferred?type=dev
[daviddm-devdeps-img]: https://img.shields.io/david/dev/tunnckoCore/native-promise-deferred.svg

[ghtag-url]: https://github.com/tunnckoCore/native-promise-deferred/tags
[ghtag-img]: https://img.shields.io/github/tag/tunnckoCore/native-promise-deferred.svg?label=github%20tag

[npmv-url]: https://www.npmjs.com/package/native-promise-deferred
[npmv-img]: https://img.shields.io/npm/v/native-promise-deferred.svg?label=npm%20version

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[paypalme-url]: https://www.paypal.me/tunnckoCore
[paypalme-img]: https://img.shields.io/badge/paypal-donate-brightgreen.svg

[czfriendly-url]: http://commitizen.github.io/cz-cli
[czfriendly-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[gkfriendly-url]: https://greenkeeper.io/
[gkfriendly-img]: https://img.shields.io/badge/greenkeeper-friendly-brightgreen.svg

[codementor-url]: https://www.codementor.io/tunnckocore?utm_source=github&utm_medium=button&utm_term=tunnckocore&utm_campaign=github
[codementor-img]: https://img.shields.io/badge/code%20mentor-live%20session-brightgreen.svg

[istanbulcov-url]: https://twitter.com/tunnckoCore/status/841768516965568512
[istanbulcov-img]: https://img.shields.io/badge/istanbul-400%25-brightgreen.svg

[following-semver-url]: http://semver.org
[following-semver-img]: https://img.shields.io/badge/following-semver-brightgreen.svg

[strelease-url]: https://github.com/conventional-changelog/standard-version
[strelease-img]: https://img.shields.io/badge/using-standard%20version-brightgreen.svg

[supportchat-url]: https://gitter.im/tunnckoCore/support
[supportchat-img]: https://img.shields.io/gitter/room/tunnckoCore/support.svg

[bulgaria-url]: https://www.google.bg/search?q=Sofia%2C+Bulgaria "One of the top 10 best places for start-up business in the world, especially in IT technologies"

[changelogmd-url]: https://github.com/tunnckoCore/native-promise-deferred/blob/master/CHANGELOG.md
[conventions-url]: https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md
[tunnckocore-twitter-url]: https://twitter.com/tunnckoCore
[opensource-project-url]: http://openopensource.org
[nyc-istanbul-url]: https://istanbul.js.org
[circle-ci-url]: https://circleci.com
[appveyor-ci-url]: https://appveyor.com
[codecov-coverage-url]: https://codecov.io
[semver-url]: http://semver.org
[eslint-url]: http://eslint.org
[conventional-messages-url]: https://github.com/conventional-changelog/conventional-changelog
[gk-integration-url]: https://github.com/integration/greenkeeper
[daviddm-url]: https://david-dm.org
[open-issue-url]: https://github.com/tunnckoCore/native-promise-deferred/issues/new
[contributing-url]: https://github.com/tunnckoCore/native-promise-deferred/blob/master/CONTRIBUTING.md
[absolute-coverage-url]: https://github.com/tunnckoCore/native-promise-deferred/blob/master/package.json

