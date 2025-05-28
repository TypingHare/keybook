import { createModule, createModuleBinder } from '../../helper.js'
import { Keybinding } from '../../keybook.js'

export const neoTreeModule = createModule(
    'Neo-tree',
    'The tree viewer in Neovim.'
)
export const neoTree = createModuleBinder(neoTreeModule)

export const neoTreeKeybindings: Keybinding[] = [
    neoTree.bind('n', 'h', 'Close directory.'),
    neoTree.bind('n', 'l', 'Open file or directory.'),
    neoTree.bind('n', 'j', 'Move down.'),
    neoTree.bind('n', 'k', 'Move up.'),
    neoTree.bind('n', 'a', 'Create a new file.'),
    neoTree.bind('n', 'A', 'Create a new directory.'),
    neoTree.bind('n', 'd', 'Delete a file or directory.'),
    neoTree.bind('n', 'r', 'Rename a file or directory.'),
    neoTree.bind('n', 'b', 'Rename basename.'),
    neoTree.bind('n', 'm', 'Move a file or directory.'),
    neoTree.bind('n', 'c', 'Copy a file or directory.'),
    neoTree.bind('n', 'x', 'Cut a file or directory.'),
    neoTree.bind('n', 'p', 'Paste the file or directory.'),
    neoTree.bind('n', ['y', 'n'], 'Yank the name.'),
    neoTree.bind('n', ['y', 'r'], 'Yank the relative path.'),
    neoTree.bind('n', ['y', 'a'], 'Yank the absolute path.'),
    neoTree.bind('n', 'i', 'Show file details.'),
    neoTree.bind('n', 'f', 'Find files.'),
    neoTree.bind('n', '<Esc>', 'Clear filter.'),

    neoTree.bind('n', 'o', 'Show order help menu.'),
    neoTree.bind('n', ['o', 'c'], 'Order by created.'),
    neoTree.bind('n', ['o', 'd'], 'Order by diagnostics.'),
    neoTree.bind('n', ['o', 'g'], 'Order by git status.'),
    neoTree.bind('n', ['o', 'm'], 'Order by modified.'),
    neoTree.bind('n', ['o', 'n'], 'Order by name.'),
    neoTree.bind('n', ['o', 's'], 'Order by size.'),
    neoTree.bind('n', ['o', 't'], 'Order by type.'),

    neoTree.bind('n', 'H', 'Toggle hidden files.'),
    neoTree.bind('n', 'P', 'Toggle preview in floating window.'),
    neoTree.bind('n', 'R', 'Refresh the NeoTree.'),

    neoTree.bind('n', 'e', 'Move the focus to the editor.'),
    neoTree.bind('n', 'q', 'Close Neo-tree.'),
    neoTree.bind('n', '?', 'Show keybindings popup.'),
]
