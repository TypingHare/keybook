import { createModule, createModuleBinder } from '../../helper'
import { Keybinding } from '../../keybook'

export const neoTreeModule = createModule(
    'NeoTree',
    'The tree viewer in Neovim.'
)
export const neoTree = createModuleBinder(neoTreeModule)

export const neoTreeKeybindings: Keybinding[] = [
    neoTree.bind('n', 'h', 'Close directory.'),
    neoTree.bind('n', 'l', 'Open file or directory.'),
    neoTree.bind('n', 'j', 'Move down.'),
    neoTree.bind('n', 'k', 'Move up.'),
    neoTree.bind('n', 'a', 'Create a new file or directory.'),
    neoTree.bind('n', 'd', 'Delete a file or directory.'),
    neoTree.bind('n', 'r', 'Rename a file or directory.'),
    neoTree.bind('n', 'c', 'Copy a file or directory.'),
    neoTree.bind('n', 'x', 'Cut a file or directory.'),
    neoTree.bind('n', 'p', 'Paste the file or directory.'),
    neoTree.bind('n', ['y', 'n'], 'Yank the name.'),
    neoTree.bind('n', ['y', 'r'], 'Yank the relative path.'),
    neoTree.bind('n', ['y', 'a'], 'Yank the absolute path.'),
    neoTree.bind('n', 'f', 'Find files.'),
    neoTree.bind('n', '<Esc>', 'Clear filter.'),

    neoTree.bind('n', 'H', 'Toggle hidden files.'),
    neoTree.bind('n', 'P', 'Toggle preview in floating window.'),
    neoTree.bind('n', 'R', 'Refresh the NeoTree.'),

    neoTree.bind('n', 'e', 'Move the focus to the editor.'),
    neoTree.bind('n', 'q', 'Close the NeoTree.'),
    neoTree.bind('n', '?', 'Show keybindings popup.'),
]
