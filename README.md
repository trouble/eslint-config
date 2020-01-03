[![NPM](https://img.shields.io/npm/v/@trbl/eslint-config)](https://www.npmjs.com/@trbl/eslint-config)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/eslint-config?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# JavaScript Style Guide

Please do not feed the dust bunnies.

## Quick Start

### Installation

```bash
$ yarn add @trbl/eslint-config --dev
$ yarn info @trbl/eslint-config peerDependencies
$ yarn add --dev <dependency>@<version> # for each dependency in the above output
```

### Usage

There are a number of configurations for consumption, all of which are packaged together as the default export &mdash; *or they can be selectively extended, which prevents the pathnames [from being written shorthand](https://eslint.org/docs/developer-guide/shareable-configs#sharing-multiple-configs).*

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

## Demo

To demo locally, clone the repo and

```bash
$ yarn
$ yarn demo
```

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/eslint-config/blob/master/LICENSE) Copyright (c) TRBL, LLC
