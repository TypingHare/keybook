import { emitKeybook } from '../emit.js'
import { keybook } from '../haystack/index.js'
import fs from 'node:fs'

fs.writeFileSync('haystack.keybook.json', emitKeybook(keybook))
