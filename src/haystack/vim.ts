import { createModule, createModuleBinder } from '../helper'

export const vimModule = createModule('vim', 'Vim is what Neovim bases on.')
export const vim = createModuleBinder(vimModule)

export const vimKeybindings = [
    vim.bind('normal', 'i', 'Insert before the cursor.'),
    vim.bind('normal', 'I', 'Insert at the beginning of the line.'),
    vim.bind('normal', 'a', 'Insert after the cursor.'),
    vim.bind('normal', 'A', 'Insert at the end of the line.'),
    vim.bind('normal', 'o', 'Open a new line below and insert.'),
    vim.bind('normal', 'O', 'Open a new line above and insert.'),

    vim.bind('normal', 'h', 'Move left.'),
    vim.bind('normal', 'j', 'Move down.'),
    vim.bind('normal', 'k', 'Move up.'),
    vim.bind('normal', 'l', 'Move right.'),
    vim.bind('normal', 'w', 'Jump to the start of the next word.'),
    vim.bind('normal', 'b', 'Jump to the start of the previous word.'),
    vim.bind('normal', 'e', 'Jump to the end of the next word.'),
    vim.bind('normal', '0', 'Jump to the beginning of the line.'),
    vim.bind('normal', '^', 'Jump to the first non-whitespace character.'),
    vim.bind('normal', '$', 'Jump to the end of the line.'),
    vim.bind('normal', ['g', 'g'], 'Go to the beginning of the file.'),
    vim.bind('normal', ['G'], 'Go to the end of the file.'),
    vim.bind('normal', ['y', 'y'], 'Yank the current line.'),
    vim.bind('normal', ['d', 'd'], 'Cut the current line.'),
    vim.bind('normal', 'p', 'Paste after the cursor.'),
    vim.bind('normal', 'P', 'Paste before the cursor.'),
    vim.bind('normal', 'u', 'Undo last change.'),
    vim.bind('normal', '<C-r>', 'Redo last undo change.'),

    vim.bind('normal', 'v', 'Start visual mode.'),
    vim.bind('normal', 'V', 'Start visual line mode.'),
    vim.bind('normal', '<C-v>', 'Start visual block mode.'),

    vim.bind('insert', '<Esc>', 'Return to normal mode.'),

    vim.bind('visual', 'd', 'Cut the selection.'),
    vim.bind('visual', 'y', 'Yank the selection.'),
    vim.bind('visual', '>', 'Indent selection.'),
    vim.bind('visual', '<', 'Unindent selection.'),
]
