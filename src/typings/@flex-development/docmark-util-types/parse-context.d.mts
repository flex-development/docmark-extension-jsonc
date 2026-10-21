import type {} from '@flex-development/docmark-util-types'

declare module '@flex-development/docmark-util-types' {
  interface ParseContext {
    /**
     * Whether a comment is **not** allowed at the current position.
     */
    skipComment?: boolean | undefined
  }
}
