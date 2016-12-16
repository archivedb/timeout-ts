
const timeout = (ms: number = 0): Promise<void> =>
  new Promise<void>(resolve => { setTimeout(resolve, ms) })

export const timeoutTI = (ms: number = 0): [Promise<void>, number] => {
  let timeoutId = 0
  const promise = new Promise<void>(resolve => {
    timeoutId = setTimeout(resolve, ms)
  })
  return [promise, timeoutId]
}

export default timeout
