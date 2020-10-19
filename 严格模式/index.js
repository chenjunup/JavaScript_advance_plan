"use strict";
// 1. 严格模式下 企图通过 不使用关键字的方式创建全局变量 会报错
// ReferenceError: a is not defined
// a = 1;

// 2. delete 操作符 报错
// Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
// var b = 2;
// delete b;

// 3. 用Object.defineProperty定义的对象属性
var obj = {};
Object.defineProperties(obj, {
  a: {
    value: 11,
    writable: false,
    enumerable: false,
    configurable: false
  },
  b: {
    value: 22,
    configurable: false
  }
});