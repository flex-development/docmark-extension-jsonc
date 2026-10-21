import type { Options } from '@flex-development/docmark-extension-jsonc'
import type {} from '@flex-development/docmark-util-types'

declare module '@flex-development/docmark-util-types' {
  interface ParseContext {
    /**
     * Whether a comment is **not** allowed at the current position.
     */
    skipComment?: boolean | undefined
  }

  interface Settings {
    /**
     * Options for parsing JSON comments.
     *
     * @see {@linkcode Options}
     */
    json?: Options | null | undefined
  }
}
