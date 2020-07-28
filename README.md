# Description

[![NPM version](https://img.shields.io/npm/v/accurate-core.svg?style=flat)](https://www.npmjs.com/package/accurate-core)
[![Build Status](https://travis-ci.org/Ipxxiao/accurate-core.svg?branch=master)](https://travis-ci.org/Ipxxiao/accurate-core)
[![codecov](https://codecov.io/gh/Ipxxiao/accurate-core/branch/master/graph/badge.svg)](https://codecov.io/gh/Ipxxiao/accurate-core)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![NPM downloads](https://img.shields.io/npm/dm/accurate-core.svg?style=flat)](https://www.npmjs.com/package/accurate-core)
[![Coverage Status](https://coveralls.io/repos/github/Ipxxiao/accurate-core/badge.svg?branch=master)](https://coveralls.io/github/Ipxxiao/accurate-core?branch=master)

- An simple High performance precision calculation for JavaScript and Node.js.
- 解决JavaScript与Node.js精度计算（浮点数计算精度）问题，性能较高。

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

``` base
npm i accurate-core -S
or
yarn add accurate-core
```

## Features

- High performance
- Runs on any JavaScript engine.
- Is easily extensible.
- Open source.

- 性能较高。
- 运行在任何JavaScript引擎。
- 易于扩展。
- 开源的。

## More features

- See [accurate](https://github.com/Ipxxiao/accurate) for more features.
- 更多功能请查看 [accurate](https://github.com/Ipxxiao/accurate)。

## Usage

``` javascript 
import accurateCalc, {
  add, addition, subtract, subtraction, multiply, mul, multiplication, division, divide, modulo, modulus
} from 'accurate-core'
or
const accurateCalc, {
  add, addition, subtract, subtraction, multiply, mul, multiplication, division, divide, modulo, modulus
} = require('accurate-core')
```


. **add（加法）**
``` javascript
>
1.1 + 0.3
accurateCalc.add(1.1, 0.3)
addition(1.1, 0.3)

<-
1.4000000000000001
1.4
1.4
```

. **subtract（减法）**
``` javascript
>
1.1 - 0.2
accurateCalc.subtract(1.1, 0.2)
subtraction(1.1, 0.2)

<-
0.9000000000000001
0.9
0.9
```

. **multiply（乘法）**
``` javascript
>
1.1 * 0.1
accurateCalc.multiply(1.1, 0.1)
accurateCalc.mul(1.1, 0.1)
multiplication(1.1, 0.1)

<-
0.11000000000000001
0.11
0.11
0.11
```

. **division（除法）**
``` javascript
>
1.1 / 10
accurateCalc.division(1.1, 10)
accurateCalc.divide(1.1, 10)

<-
0.11000000000000001
0.11
0.11
```

. **modulo（取模）**
``` javascript
>
1.1 % 1
accurateCalc.modulo(1.1, 1)
accurateCalc.modulus(1.1, 1)

<-
0.10000000000000009
0.1
0.1
```

## More
- [Docs](https://github.com/Ipxxiao/accurate-core/tree/master/docs)
- [Test](https://github.com/Ipxxiao/accurate-core/blob/master/__tests__/index.spec.ts)
