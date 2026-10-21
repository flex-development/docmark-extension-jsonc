/**
 * @file E2E Tests - comments
 * @module docmark-extension-jsonc/tests/e2e/comments
 */

import docs from '#fixtures/extensions/docs'
import expressions from '#fixtures/extensions/expressions'
import language from '#fixtures/initialize/language'
import snapshot from '#tests/utils/snapshot-events'
import { parse, postprocess, preprocess } from '@flex-development/docmark'
import testSubject from '@flex-development/docmark-extension-jsonc'
import type {
  Chunk,
  Extension,
  FileLike,
  ParseOptions,
  TokenizeContext
} from '@flex-development/docmark-util-types'
import pathe from '@flex-development/pathe'
import { readSync as read } from 'to-vfile'
import { beforeEach, describe, expect, it } from 'vitest'

describe('e2e:comments', () => {
  let options: ParseOptions

  beforeEach(() => {
    options = { extensions: [testSubject] }
  })

  it('should ignore comments if comments are disabled', () => {
    // Arrange
    const file: FileLike = read(pathe.join('__fixtures__', 'source/01.txt'))
    const slice: Chunk[] = preprocess()(file, undefined, true)
    const context: TokenizeContext = parse(options).comments()

    // Setup
    context.parser.constructs.settings.json = { comments: false }

    // Act
    const result = postprocess(context.write(slice))

    // Expect
    expect(snapshot(result)).toMatchSnapshot()
  })

  it.each<[path: string, ...extensions: Extension[]]>([
    ['source/02.txt'],
    ['source/03.txt', docs]
  ])('should parse comments (%j)', (path, ...extensions) => {
    // Arrange
    const file: FileLike = read(pathe.join('__fixtures__', path))
    const options: ParseOptions = { extensions: [testSubject, ...extensions] }
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = postprocess(parse(options).comments().write(slice))

    // Expect
    expect(snapshot(result)).toMatchSnapshot()
  })

  it.each<[path: string]>([
    ['source/04.txt'],
    ['source/05.txt']
  ])('should parse comments and respect source language (%j)', path => {
    // Arrange
    const extensions: Extension[] = [testSubject, docs, expressions]
    const file: FileLike = read(pathe.join('__fixtures__', path))
    const options: ParseOptions = { extensions, initializers: { language } }
    const slice: Chunk[] = preprocess()(file, undefined, true)

    // Act
    const result = postprocess(parse(options).source().write(slice))

    // Expect
    expect(snapshot(result)).toMatchSnapshot()
  })
})
