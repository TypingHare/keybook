import { createModule, createModuleBinder } from '../../helper.js'
import { Keybinding } from '../../keybook.js'

export const vimModule = createModule('vim', 'Vim is what Neovim bases on.')
export const vim = createModuleBinder(vimModule)

export const vimKeybindings: Keybinding[] = [
    vim.bind('n', 'i', 'Insert before the cursor.'),
    vim.bind('n', 'I', 'Insert at the beginning of the line.'),
    vim.bind('n', 'a', 'Insert after the cursor.'),
    vim.bind('n', 'A', 'Insert at the end of the line.'),
    vim.bind('n', 'o', 'Open a new line below and insert.'),
    vim.bind('n', 'O', 'Open a new line above and insert.'),

    vim.bind('n', 'h', 'Move left.'),
    vim.bind('n', 'j', 'Move down.'),
    vim.bind('n', 'k', 'Move up.'),
    vim.bind('n', 'l', 'Move right.'),
    vim.bind('n', 'w', 'Jump to the start of the next word.'),
    vim.bind('n', 'b', 'Jump to the start of the previous word.'),
    vim.bind('n', 'e', 'Jump to the end of the next word.'),
    vim.bind('n', '0', 'Jump to the beginning of the line.'),
    vim.bind('n', '^', 'Jump to the first non-whitespace character.'),
    vim.bind('n', '$', 'Jump to the end of the line.'),
    vim.bind('n', ['g', 'g'], 'Go to the beginning of the file.'),
    vim.bind('n', ['G'], 'Go to the end of the file.'),
    vim.bind('n', ['y', 'y'], 'Yank the current line.'),
    vim.bind('n', ['d', 'd'], 'Cut the current line.'),
    vim.bind('n', 'p', 'Paste after the cursor.'),
    vim.bind('n', 'P', 'Paste before the cursor.'),
    vim.bind('n', 'u', 'Undo last change.'),
    vim.bind('n', '<C-r>', 'Redo last undo change.'),

    vim.bind('n', 'v', 'Start visual mode.'),
    vim.bind('n', 'V', 'Start visual line mode.'),
    vim.bind('n', '<C-v>', 'Start visual block mode.'),

    vim.bind('i', '<Esc>', 'Return to normal mode.'),

    vim.bind('v', 'd', 'Cut the selection.'),
    vim.bind('v', 'y', 'Yank the selection.'),
    vim.bind('v', '>', 'Indent selection.'),
    vim.bind('v', '<', 'Unindent selection.'),
]
