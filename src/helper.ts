import { KeyComb } from './key-comb'
import { Keybinding, Keybook, Mode, Module } from './keybook'

/**
 * Creates a keybook.
 *
 * @see Keybook
 */
export function createKeybook(
    keybindings: Keybinding[] = [],
    modules: Module[] = []
): Keybook {
    return {
        keybindings,
        modules,
    }
}

/**
 * Creates a module.
 *
 * @see Module
 */
export function createModule(name: string, description: string): Module {
    return { name, description }
}

/**
 * Creates a module binder.
 *
 * @param module The module to bind to.
 */
export function createModuleBinder(module: Module): Binder {
    return {
        bind: function (
            mode: Mode,
            key: KeyComb,
            action: string,
            other: Parameters<Binder['bind']>[3] = {}
        ): Keybinding {
            return {
                mode,
                key,
                action,
                module: module.name,
                verbose: other.verbose || null,
            }
        },
    }
}

export interface Binder {
    bind: (
        mode: Mode,
        key: KeyComb,
        action: string,
        other?: Partial<Omit<Keybinding, 'mode' | 'key' | 'action' | 'module'>>
    ) => Keybinding
}
