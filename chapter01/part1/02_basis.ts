/*
 * @Author: 张玉婷
 * @Date: 2022-08-25 13:28:24
 * @LastEditTime: 2022-08-25 13:56:30
 * @LastEditors: 张玉婷
 * @Description: 
 * @FilePath: \typeScript\typeScript\chapter01\02_basis.ts
 */
// 声明一个变量a, 同时指定a的类型为number 
let a: number;
// 在以后使用a只能是数字类型
a = 10;
// 此行代码报错了 因为a是数字类型 不能赋值字符串类型
// a = "hello"

// 声明一个变量b, 同时指定b的类型为string
let b: string;
b = '123'
// 此行代码报错了 因为b是字符串 不能赋值数值类型
// b = 123;

// 声明一个变量直接赋值
let c: boolean = false;
// 此行代码报错了 因为c是boolea类型 不能赋值数值类型
// let c: boolean = 1;

// 如果变量声明赋值同时进行 ts可以自动对变量进行类型监测
let d = true;

function sum (a: number, b: number){
  return a + b;
}

sum(1, 2);