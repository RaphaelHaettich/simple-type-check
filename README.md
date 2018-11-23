# simple-type-check

[![GitHub license](https://img.shields.io/github/license/RaphaelHaettich/simple-type-check.svg)](https://github.com/RaphaelHaettich/simple-type-check/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/RaphaelHaettich/simple-type-check.svg?branch=master)](https://travis-ci.org/RaphaelHaettich/simple-type-check)
[![NPM version](https://img.shields.io/npm/v/simple-type-check.svg?style=flat)](https://www.npmjs.com/package/simple-type-check)
[![GitHub issues](https://img.shields.io/github/issues/RaphaelHaettich/simple-type-check.svg)](https://github.com/RaphaelHaettich/simple-type-check/issues)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


# simple-type-check
> Simple and very small JavaScript library to check types and instanceof. 
  
## Install
Install with [npm](https://www.npmjs.com/):

```sh
npm install simple-type-check
```

## Usage
Include module in your file:
```js
const simpleTypeCheck = require('simple-type-check');
```
You need to call the function with the parameters ```value``` and ```type```. Value can be anything and the type needs to be a string for type checking or the function for instanceof checking.
```js
const value = 1234;
const type = 'number';
const result = simpleTypeCheck(value , type);
// result is now true.
```
In the default settings the library returns ```true``` if the check was successful and throws an ```Error``` if it fails.

```js
const value = 'string';
const type = 'number';
const result = simpleTypeCheck(value , type);
// result is undefinied and the error: "string is not of type number" is thrown.
```
The third argument is ```throwError```, which is default ```true```.  You can add ```false``` as the third argument. Then the library will not throw an ```Error``` and instead return ```false```.

```js
const value = 'string';
const type = 'number';
const result = simpleTypeCheck(value , type, false);
// result is false.
```
If you want to test an ```Array```, ```HTMLElement``` or something similar, you can do this too. In this case you need to add the function as ```type```.

```js
const value = [];
const type = Array;
const result = simpleTypeCheck(value , type);
// result is true.
```
```js
const value = document.getElementById("testId");
const type = window.HTMLElement;
const result = simpleTypeCheck(value , type);
// result is true.
```
### Testet types
The following types are testet, anything different should work too. You are welcome to add a PR with the test for more types.
| Type | Works |
|--|--|
| ```Array``` | ✅ |
| ```HTMLElement``` | ✅ |
| ```'number'``` | ✅ |
| ```'function'``` | ✅ |
| ```'bool'``` | ✅ |
| ```'object'``` | ✅ |
| ```'string'``` | ✅ |
| ```'undefined'``` | ✅ |

## Contribute
If you want to contribute to this project please commit with the `npm run commit` command, this will secure the automatic semantic versioning. 

