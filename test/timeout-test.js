
import test from 'ava'
import timeout from '../lib/timeout'

test('await timeout', async t => {
  const beginTime = Date.now()

  await timeout()
  await timeout(100)

  const endTime = Date.now()

  t.true(endTime - beginTime >= 100)
})

test('await callback', async t => {
  let variable = false

  timeout(10).then(() => {
    t.false(variable)
    variable = true
  })

  await timeout(100)

  t.true(variable)
})
