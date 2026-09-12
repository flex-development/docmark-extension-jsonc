# docmark-extension-jsonc

[![github release](https://img.shields.io/github/v/release/flex-development/docmark-extension-jsonc.svg?include_prereleases\&sort=date)](https://github.com/flex-development/docmark-extension-jsonc/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/docmark-extension-jsonc.svg)](https://npmjs.com/package/@flex-development/docmark-extension-jsonc)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/docmark-extension-jsonc.svg)](https://www.npmcharts.com/compare/@flex-development/docmark-extension-jsonc?interval=30)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/docmark-extension-jsonc?cache)](https://bundlephobia.com/package/@flex-development/docmark-extension-jsonc)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/docmark-extension-jsonc)](https://packagephobia.now.sh/result?p=@flex-development/docmark-extension-jsonc)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/docmark-extension-jsonc)](https://bundlephobia.com/package/@flex-development/docmark-extension-jsonc)
[![codecov](https://codecov.io/github/flex-development/docmark-extension-jsonc/graph/badge.svg?token=pNR7XOHALV)](https://codecov.io/github/flex-development/docmark-extension-jsonc)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/docmark-extension-jsonc.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

[`docmark`][docmark] extension to support jsonc comment syntax.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`jsonComments`][api-json-comments]
  - [`jsonBlockComment`][api-json-block-comment]
  - [`jsonLineComment`][api-json-line-comment]
- [Types](#types)
- [Project](#project)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Sponsor](#sponsor)

## What is this?

**TODO**: what is this?

## When should I use this?

**TODO**: when should i use this?

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/docmark-extension-jsonc
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { jsonComments } from 'https://esm.sh/@flex-development/docmark-extension-jsonc'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { jsonComments } from 'https://esm.sh/@flex-development/docmark-extension-jsonc'
</script>
```

## Use

**TODO**: use

## API

This package exports the identifiers [`jsonComments`][api-json-comments], [`jsonBlockComment`][api-json-block-comment],
and [`jsonLineComment`][api-json-line-comment].

The default export is `jsonComments`.

### [`jsonComments`](./src/comments.mts)

**TODO**: `jsonComments`

### `jsonBlockComment`

**TODO**: `jsonBlockComment`

### [`jsonLineComment`](./src/line.comment.mts)

**TODO**: `jsonLineComment`

## Types

This package is fully typed with [TypeScript][].

## Project

### Version

docmark-extension-jsonc adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.
Support long-term stability by sponsoring Flex Development.

[api-json-block-comment]: #jsonblockcomment

[api-json-comments]: #jsoncomments

[api-json-line-comment]: #jsonlinecomment

[docmark]: https://github.com/flex-development/docmark

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[semver]: https://semver.org

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
