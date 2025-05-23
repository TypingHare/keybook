import { Keybook } from './keybook'

export function emitKeybook(keybook: Keybook): string {
    return JSON.stringify(keybook)
}
