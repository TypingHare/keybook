import { KeyComb } from './key-comb'

/**
 * Represents a keybook.
 *
 * @property keybindings
 * @property modules
 */
export interface Keybook {
    keybindings: Keybinding[]
    modules: Module[]
}

/**
 * Represents a keybinding item.
 *
 * @property mode    The mode associated with this keybinding.
 * @property key     The key or key combination associated with this keybinding.
 * @property action  The description of the action associated with this
 *                   keybinding. Usually in one sentence.
 * @property module  The name of the module associated with this keybinding.
 * @property verbose The verbose description about this keybinding.
 */
export interface Keybinding {
    mode: Mode
    key: KeyComb
    action: string
    module: string | null
    verbose: string | null
}

/**
 * Four different modes in Vim/Neovim.
 * n - Normal
 * i - Insert
 * v - Visual
 * t - Terminal
 */
export type Mode = 'n' | 'i' | 'v' | 't'

/**
 * Represents a module.
 *
 * @property name        The name of this module.
 * @property description The description of this module.
 */
export interface Module {
    name: string
    description: string
}
