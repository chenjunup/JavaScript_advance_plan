"use strict";
// 1. 严格模式下无法再意外创建全局变量（变量名写错） 企图通过不使用关键字的方式创建全局变量会报错
// ReferenceError: a is not defined
// a = 1;

// 2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常

// 给不可写属性赋值
// var obj1 = {};
// Object.defineProperty(obj1, "x", { value: 42, writable: false });
// obj1.x = 9; // 抛出TypeError错误

// 给只读属性赋值
// var obj2 = { get x() { return 17; } };
// obj2.x = 5; // 抛出TypeError错误

// 给不可扩展对象的新属性赋值
// var fixed = {};
// Object.preventExtensions(fixed);
// fixed.newProp = "ohai"; // 抛出TypeError错误

// 3. 在严格模式下, 试图删除不可删除的属性时会抛出异常(之前这种操作不会产生任何效果):
// 4. 在严格模式下, 对象中的重名属性会抛出异常

function fun() { return this; }
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
