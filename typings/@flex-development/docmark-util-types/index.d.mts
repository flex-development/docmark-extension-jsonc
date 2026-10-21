import type { ConstructRecord } from '@flex-development/docmark-util-types'

declare module '@flex-development/docmark-util-types' {
  interface ContainerState {
    /**
     * For array expressions, the current array nesting depth.
     *
     * The first array expression marker in the content establishes a nesting
     * depth of one. Nested left square brackets increase the depth, while right
     * square brackets decrease it.\
     * An array expression closes when the depth returns to zero.
     *
     * @internal
     */
    arrays?: number | undefined

    /**
     * For object expressions, the current object nesting depth.
     *
     * The first object expression marker in the content establishes a nesting
     * depth of one. Nested left curly braces increase the depth, while right
     * curly braces decrease it.\
     * An object expression closes when the depth returns to zero.
     *
     * @internal
     */
    objects?: number | undefined
  }

  interface Extension {
    /**
     * Parse `expression` content.
     *
     * @see {@linkcode ConstructRecord}
     *
     * @internal
     */
    expression?: ConstructRecord | undefined
  }

  interface Token {
    /**
     * The value of the token.
     *
     * @internal
     */
    value?: string | null | undefined
  }

  interface TokenTypeMap {
    /** @internal */
    arrayExpression: 'arrayExpression'

    /** @internal */
    arrayMarker: 'arrayMarker'

    /** @internal */
    booleanExpression: 'booleanExpression'

    /** @internal */
    fieldSeparator: 'fieldSeparator'

    /** @internal */
    nullExpression: 'nullExpression'

    /** @internal */
    numberExpression: 'numberExpression'

    /** @internal */
    objectExpression: 'objectExpression'

    /** @internal */
    objectMarker: 'objectMarker'

    /** @internal */
    stringExpression: 'stringExpression'

    /** @internal */
    stringMarker: 'stringMarker'

    /** @internal */
    unexpectedValue: 'unexpectedValue'

    /** @internal */
    valueSeparator: 'valueSeparator'
  }
}
