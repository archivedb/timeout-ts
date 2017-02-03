import test from 'ava'
import { timeout, timeoutTI } from '../lib/timeout'

test('clean timeout', async t => {
  let variable = true

  const [promise, timeoutId] = timeoutTI(10)

  t.not(timeoutId, 0)

  promise.then(() => {
    variable = false
  })

  clearTimeout(timeoutId)

  await timeout(100)

  t.true(variable)
})
