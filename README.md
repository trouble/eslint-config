[![NPM](https://img.shields.io/npm/v/@trbl/eslint-config)](https://www.npmjs.com/@trbl/eslint-config)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/eslint-config?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# JavaScript Style Guide

Please do not feed the dust bunnies.

## Quick Start

### Installation

```bash
$ yarn add @trbl/eslint-config --dev
$ yarn info "@trbl/eslint-config" peerDependencies
$ yarn add --dev <dependency>@<version> # for each dependency in the above output
```

### Usage

There are two configurations for consumption, both of which are packaged together as the default export. *Or they can be selectively extended &mdash; but when doing this, the pathnames [can't be written shorthand](https://eslint.org/docs/developer-guide/shareable-configs#sharing-multiple-configs).*

```javascript
{
  "extends": "@trbl"
  // or selectively extend either config
  // "extends": [
  //   "@trbl/eslint-config/configs/base",
  //   "@trbl/eslint-config/configs/react",
  // ]
}
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn install
$ yarn run lint
```

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/eslint-config/blob/master/LICENSE) Copyright (c) TRBL, LLC
