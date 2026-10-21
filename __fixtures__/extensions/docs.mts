/**
 * @file Extensions - docs
 * @module fixtures/extensions/docs
 */

import { constants, lang } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'

/**
 * The docblock support extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} docs
 */
const docs: NormalizedExtension = {
  [constants.extensionFieldSettings]: { [lang.json]: { docs: true } }
}

export default docs
