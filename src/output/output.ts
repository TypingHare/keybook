import { emitKeybook } from '../emit'
import { keybook } from '../haystack/keybook'
import fs from 'node:fs'

fs.writeFileSync('haystack.keybook.json', emitKeybook(keybook))
