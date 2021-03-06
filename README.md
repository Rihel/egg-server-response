# egg-server-response

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-server-response.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-server-response
[travis-image]: https://img.shields.io/travis/eggjs/egg-server-response.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-server-response
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-server-response.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-server-response?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-server-response.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-server-response
[snyk-image]: https://snyk.io/test/npm/egg-server-response/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-server-response
[download-image]: https://img.shields.io/npm/dm/egg-server-response.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-server-response

<!--
Description here.
-->

## Install

```bash
$ npm i egg-server-response --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.serverResponse = {
  enable: true,
  package: 'egg-server-response',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.serverResponse = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
