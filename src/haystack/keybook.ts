import { createKeybook } from '../helper'
import { vimKeybindings, vimModule } from './vim'

export const keybook = createKeybook([...vimKeybindings], [vimModule])
