# timeout-ts

[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![NPM Version][npm-badge]][npm-url]

timeout as a promise

## installation

`yarn add timeout-ts`

or

`npm install timeout-ts --save`

## usage

```ts
import timeout from 'timeout-ts'

(async () => {

  // do something

  await timeout(100)

  // do something after 100 ms

})()
```

## api

### timeout

```ts
timeout: (ms?: number) => Promise<void>
```

```ts
import timeout from 'timeout-ts'

(async () => {
  await timeout(100)
  // do something
})()

timeout(100).then(() => {
  // do something
})
```

### timeout (with timeout id)

```ts
timeoutTI: (ms?: number) => [Promise<void>, number]
```

```ts
import { timeoutTI } from 'timeout-ts'

const [promise, timeoutId] = timeoutTI(100)

(async () => {
  await promise
  // do something
})()

clearTimeout(timeoutId)
```

## license

MIT

[build-badge]: https://img.shields.io/travis/airt/timeout-ts/master.svg
[build-status]: https://travis-ci.org/airt/timeout-ts
[coverage-badge]: https://img.shields.io/coveralls/airt/timeout-ts.svg
[coverage-result]: https://coveralls.io/github/airt/timeout-ts
[npm-badge]: https://img.shields.io/npm/v/timeout-ts.svg
[npm-url]: https://www.npmjs.com/package/timeout-ts
