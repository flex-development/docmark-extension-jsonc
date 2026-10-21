/**
 * @file Interfaces - Options
 * @module docmark-extension-jsonc/interfaces/Options
 */

import type { LanguageOptions } from '@flex-development/docmark-util-types'

/**
 * Options for parsing.
 *
 * @see {@linkcode LanguageOptions}
 *
 * @extends {LanguageOptions}
 */
interface Options extends LanguageOptions {
  /**
   * Whether comments are allowed.
   *
   * @default true
   */
  comments?: boolean | null | undefined

  /**
   * Whether docblocks are supported.
   */
  docs?: boolean | null | undefined
}

export type { Options as default }
