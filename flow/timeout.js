// @flow

declare module 'timeout-ts' {

  declare export var timeout: (ms?: number) => Promise<void>

  declare export var timeoutTI: (ms?: number) => [Promise<void>, number]

  declare export default timeout

}
