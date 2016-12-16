
# timeout-ts

timeout as a promise

[![NPM Version][npm-badge]][npm-url]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]

## installation

`npm install timeout-ts --save`

## usage

```ts
import timeout from 'timeout-ts'

const main = async () => {

  const beginTime = Date.now()

  await timeout(100)

  const endTime = Date.now()

  assert(endTime - beginTime >= 100)

}

main()
```

## api

### timeout

```ts
timeout: (ms?: number) => Promise<void>
```

```ts
import timeout from 'timeout-ts'

timeout(100).then(() => {
  // do something
})

async () => {
  await timeout(100)
  // do something
}
```

### timeoutTI

```ts
timeoutTI: (ms?: number) => [Promise<void>, number]
```

```ts
import { timeoutTI } from 'timeout-ts'

const [promise, timeoutId] = timeoutTI(100)

promise.then(() => {
  // do something
})

clearTimeout(timeoutId)
```

## license

MIT

[npm-badge]: https://img.shields.io/npm/v/timeout-ts.svg
[npm-url]: https://www.npmjs.com/package/timeout-ts
[build-badge]: https://img.shields.io/travis/airt/timeout-ts/master.svg
[build-status]: https://travis-ci.org/airt/timeout-ts
[coverage-badge]: https://img.shields.io/coveralls/airt/timeout-ts.svg
[coverage-result]: https://coveralls.io/github/airt/timeout-ts
