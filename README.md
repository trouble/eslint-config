[![NPM](https://img.shields.io/npm/v/@trbl/eslint-config)](https://www.npmjs.com/@trbl/eslint-config)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/eslint-config?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# JavaScript Style Guide

## Highlights

## Quick Start

### Installation

```bash
$ npm i --save-dev @trbl/eslint-config
$ npm info @trbl/eslint-config peerDependencies
$ npm i --save-dev <dependency>@<version> # for each dependency in the above output
$ # or
$ yarn add --dev @trbl/eslint-config
$ yarn info @trbl/eslint-config peerDependencies
$ yarn add --dev <dependency>@<version> # for each dependency in the above output
```

### Usage

There are a number of configurations for consumption, all of which are packaged together as the default export &mdash; *or they can be selectively extended, which prevents the path names [from being written shorthand](https://eslint.org/docs/developer-guide/shareable-configs#sharing-multiple-configs).*

```javascript
{
  "extends": "@trbl"
  // or selectively extend any config(s)
  // "extends": [
  //   "@trbl/eslint-config/configs/base",
  //   "@trbl/eslint-config/configs/jest",
  //   "@trbl/eslint-config/configs/react",
  // ]
}
```

If using Webpack, install and configure `eslint-loader` to have loaded files automatically linted.

```javascript
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    fix: true,
    emitWarning: true,
  },
}
```

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:trouble/eslint-config.git
$ yarn
$ yarn demo
$ open http://localhost:3000
```

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/eslint-config/blob/master/LICENSE) Copyright (c) TRBL, LLC
