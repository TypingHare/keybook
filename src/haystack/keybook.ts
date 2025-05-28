import { createKeybook } from '../helper.js'
import { neoTreeKeybindings, neoTreeModule } from './modules/neo-tree.js'
import { vimKeybindings, vimModule } from './modules/vim.js'

export const keybook = createKeybook(
    [...vimKeybindings, ...neoTreeKeybindings],
    [vimModule, neoTreeModule]
)
