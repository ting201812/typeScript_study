/*
 * @Author: 张玉婷
 * @Date: 2022-08-25 15:27:07
 * @LastEditTime: 2022-08-29 10:55:51
 * @LastEditors: 张玉婷
 * @Description: 
 * @FilePath: \typeScript\typeScript\chapter01\04_types.ts
 */
let object1: Object;
// 正确
object1 = {};
// 正确
object1 = function() {}
// 正确
object1 = [];
// 正确
object1 = 1;

// 所以上面这样限制类型意义不大 
//  {} 里面指定对象中包含哪些属性
// 语法 {属性名： 属性值, ...}
let object2: {
  name: string,
}
//  错误 因为object2需要有个name属性
// object2 = {};

//  错误 因为object2需要没有声明age属性
// object2 = {
//   name: 'zyt',
//   age: 18,
// }

object2 = {
  name: 'zyt'
};

let obj3: {
  // name属性必须有
  name: string,
  // age属性可选
  age?: number,
}
// 正确
obj3 = {
  name: 'zyt',
}
// 正确
obj3 = {
  name: 'zyt',
  age: 18
}

// 此声明表示, 对象中需要有个name, 其他属性可任意添加
let obj4 : {
  name: string,
  [propName: string]: any,
}
// 正确
obj4 = {
  name: 'zyt',
  a: 1,
  c: 2,
}
//  错误, 缺少name属性
// obj4 = {
//   a: 1,
//   c: 2,
// }
//  函数类型声明 
// 语法: (形参: 类型, ...) => 返回值
let function1 : (a: number, b: number) => number
// 正确
function1 = function (a: number, b: number): number {
  return a + b;
}

// 错误 上面声明没有c
// function1 = function (a: number, b: number, c:number): number {
//   return a + b;
// }

// 声明字符串类型数组
let e: string[];
// 声明数值类型数组
let f: number[];
//  声明数值类型数组
let g: Array<number>;

// 元组就是固定长度的数组
// 声明一个元组类型
let h: [string, string];
// 正确
h = ['hello', '123']
// 错误， 第二个参数是string类型
// h = ['h', 124]

// 枚举类型
enum Gender {
  Male = 0,
  Femal = 1
}

let person: {
  name: string,
  gender: Gender
}

person = {
  name: 'zs',
  gender: Gender.Male
}

console.log(person.gender === Gender.Male)
//  & 表示同时
let j : { name: string } & { age: number }
//  错误, 少了age属性
// j= { name: "zs"} 
// 正确
j= { name: "zs", age: 18} 

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5;
//  m的类型为 1 | 2 | 3 | 4 | 5
let m: myType
//  l的类型为 1 | 2 | 3 | 4 | 5
let l: myType

m = 1
m = 2 
m = 3
// 错误
// m = 6

