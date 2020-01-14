# conventional-cli

> Simple Conventional for Command Line Interface (CLI)

[![Build Master](https://travis-ci.com/svoboda-rabstvo/conventional-cli.svg?branch=master)](https://travis-ci.com/svoboda-rabstvo/conventional-cli)
[![semantic](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm](https://img.shields.io/npm/v/conventional-cli.svg)](https://www.npmjs.com/package/conventional-cli)
[![download npm](https://img.shields.io/npm/dm/conventional-cli.svg)](https://www.npmjs.com/package/conventional-cli)

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

There are a lot of CLI. This repository contains a proposal to check create interfaces and models for conventional of all CLI tools.

## Installation

### NPM

```bash
npm install conventional-cli
```

## Usage

```typescript
import { Argument, IArgument, ArgumentTypes } from 'conventional-cli';

const argument: IArgument = new Argument();
argument.longName = '--argument';
argument.shortName = '-A';
argument.description = 'Full description of argument';
argument.additionalDescription = 'Additional description of argument';
argument.type = ArgumentTypes.enum;
argument.values = ['enum1', 'enum2', 'enum3', 'enum4'];
argument.default = 'enum2';
argument.required = false;
argument.deprecated = false;
argument.delimiter = ' ';
```

## Contribute

You may contribute in several ways like requesting new features,
adding tests, fixing bugs, improving documentation or examples.
Please check our [contributing guidelines][contributing].

## License

[MIT][license-url]

[conventional-cli]: https://github.com/ngx-translate/core
[travis-shield]: https://img.shields.io/travis/svoboda-rabstvo/conventional-cli/master.svg
[travis-url]: https://travis-ci.com/svoboda-rabstvo/conventional-cli/branches
[semantic-shield]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[npm-shield]: https://img.shields.io/npm/v/svoboda-rabstvo/conventional-cli.svg
[npm-url]: https://www.npmjs.com/package/conventional-cli
[npm]: https://www.npmjs.com
[node-js]: https://nodejs.org
[github-shield]: https://img.shields.io/github/release/svoboda-rabstvo/conventional-cli.svg?label=github
[github-url]: https://github.com/svoboda-rabstvo/conventional-cli
[github-release-url]: https://github.com/svoboda-rabstvo/conventional-cli/releases
[github-pages-url]: https://svoboda-rabstvo.github.io/conventional-cli/
[schema-url]: http://json-schema.org/
[web-url]: https://schema.linterhub.com
[doc-url]: https://github.com/svoboda-rabstvo/conventional-cli/blob/develop/doc
[license-url]: https://github.com/svoboda-rabstvo/conventional-cli/blob/develop/LICENSE.md
[contributing]: https://github.com/svoboda-rabstvo/conventional-cli/blob/develop/.github/CONTRIBUTING.md
