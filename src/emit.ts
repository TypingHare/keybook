import { Keybook } from './keybook.js'

export function emitKeybook(keybook: Keybook): string {
    return JSON.stringify(keybook)
}
