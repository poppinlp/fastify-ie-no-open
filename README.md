# fastify-ie-no-open

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to prevent Internet Explorer from executing downloads

## Why?

You may know [ie-no-open](https://github.com/helmetjs/ienoopen) as a [ie-no-open middleware](https://helmetjs.github.io/docs/ienoopen/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

You may find the reason in [benchmark result](./benchmarks/benchmark.txt) and wish you like it. :)

## Install

Via npm:

```shell
npm i fastify-ie-no-open
```

Via yarn:

```shell
yarn add fastify-ie-no-open
```

## Usage

```js
const fastify = require('fastify');
const fastifyIeNoOpen = require('fastify-ie-no-open');

const app = fastify();
app.register(fastifyIeNoOpen);

app.listen(3000, err => {
  if (err) throw err;
});
```

## Changelog

- 0.2.0
  - Add test case
  - Add code coverage
  - Add benchmarks
- 0.1.0:
  - Init version

[ci-img]: https://img.shields.io/travis/poppinlp/fastify-ie-no-open.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/fastify-ie-no-open
[cov-img]: https://img.shields.io/coveralls/poppinlp/fastify-ie-no-open.svg?style=flat-square
[cov-url]: https://coveralls.io/github/poppinlp/fastify-ie-no-open?branch=master
[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/fastify-ie-no-open.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/fastify-ie-no-open
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/fastify-ie-no-open.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/fastify-ie-no-open#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/fastify-ie-no-open.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/fastify-ie-no-open.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/fastify-ie-no-open.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/fastify-ie-no-open
