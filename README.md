# fastify-ie-no-open

[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to prevent Internet Explorer from executing downloads

## Why?

You may know [ie-no-open](https://github.com/helmetjs/ienoopen) as a [ie-no-open middleware](https://helmetjs.github.io/docs/ienoopen/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

Benchmark with no plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 32.37   8.9     1139.09
Req/Sec      30444   1051.31 31048
Bytes/Sec    4.53 MB 170 kB  4.63 MB

609k requests in 20s, 90.7 MB read
```

Benchmark with ie-no-open as middleware:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 37.91   136.48  9985.67
Req/Sec      25856.8 1453.66 27156
Bytes/Sec    4.55 MB 253 kB  4.81 MB

517k requests in 20s, 91.5 MB read
```

Benchmark with this plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 35.21   7.17    259.3
Req/Sec      28021.6 1165.23 29109
Bytes/Sec    4.98 MB 211 kB  5.15 MB

560k requests in 20s, 99.2 MB read
```

So that's the reason and wish you like it. :)

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

- 0.1.0: Init version

## Todo

- Add test case
- Add ci
- Add benchmark scripts

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
