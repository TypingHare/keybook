import { createKeybook } from '../helper'
import { neoTreeKeybindings, neoTreeModule } from './modules/neo-tree'
import { vimKeybindings, vimModule } from './modules/vim'

export const keybook = createKeybook(
    [...vimKeybindings, ...neoTreeKeybindings],
    [vimModule, neoTreeModule]
)
