"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modulus = exports.modulo = exports.divide = exports.division = exports.multiplication = exports.mul = exports.multiply = exports.subtraction = exports.subtract = exports.addition = exports.add = void 0;
/**
 * 获取小数位数
 *
 * @param {number} num
 * @returns {number}
 */
var getDecimalDigits = function (num) {
    var decimal = num.toString().split('.')[1];
    if (decimal) {
        return decimal.length;
    }
    else {
        return 0;
    }
};
/**
 * 获取偏移数据
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {OffsetData}
 */
var getOffsetData = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    var len1 = getDecimalDigits(num1);
    var len2 = getDecimalDigits(num2);
    var digits = Math.pow(10, Math.max(len1, len2));
    return {
        digits: digits,
        int1: Math.round(num1 * digits),
        int2: Math.round(num2 * digits),
    };
};
/**
 * 精度加法计算
 *
 * @example
 * ```js
 * add(1.1, 0.3)
 * //=> 1.4
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
exports.add = function (num1, num2) {
    var _a = getOffsetData(num1, num2), int1 = _a.int1, int2 = _a.int2, digits = _a.digits;
    return (int1 + int2) / digits;
};
exports.addition = exports.add;
/**
 * 精度减法计算
 *
 * @example
 * ```js
 * subtract(1.1, 0.2)
 * //=> 0.9
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
exports.subtract = function (num1, num2) {
    return exports.add(num1, -num2);
};
exports.subtraction = exports.subtract;
/**
 * 精度乘法计算
 *
 * @example
 * ```js
 * multiply(1.1, 0.1)
 * //=> 0.11
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
exports.multiply = function (num1, num2) {
    var _a = getOffsetData(num1, num2), int1 = _a.int1, int2 = _a.int2, digits = _a.digits;
    return int1 * int2 / Math.pow(digits, 2);
};
exports.mul = exports.multiply;
exports.multiplication = exports.multiply;
/**
 * 精度除法计算
 *
 * @example
 * ```js
 * division(1.1, 10)
 * //=> 0.11
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
exports.division = function (num1, num2) {
    var _a = getOffsetData(num1, num2), int1 = _a.int1, int2 = _a.int2;
    return int1 / int2;
};
exports.divide = exports.division;
/**
 * 精度取模计算
 *
 * @example
 * ```js
 * modulo(1.1, 1)
 * //=> 0.1
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
exports.modulo = function (num1, num2) {
    var _a = getOffsetData(num1, num2), int1 = _a.int1, int2 = _a.int2, digits = _a.digits;
    return int1 % int2 / digits;
};
exports.modulus = exports.modulo;
exports.default = {
    add: exports.add,
    addition: exports.addition,
    subtract: exports.subtract,
    subtraction: exports.subtraction,
    mul: exports.mul,
    multiply: exports.multiply,
    multiplication: exports.multiplication,
    division: exports.division,
    divide: exports.divide,
    modulo: exports.modulo,
    modulus: exports.modulus,
};
//# sourceMappingURL=index.js.map