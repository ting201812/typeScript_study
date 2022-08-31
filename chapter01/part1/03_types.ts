/*
 * @Author: 张玉婷
 * @Date: 2022-08-25 14:05:42
 * @LastEditTime: 2022-08-25 15:19:08
 * @LastEditors: 张玉婷
 * @Description: 
 * @FilePath: \typeScript\typeScript\chapter01\03_types.ts
 */

// 1. 字面量进行类型说明

let aNumber: 10;
aNumber = 10;
// 错误 aNumber必须为10
// aNumber = 20

// 可以使用 | 链接多个类型(联合类型)
let aString : 'male' | false

aString = 'male';
aString = false;
// 错误 aString必须为'male'或者false
// aString = 1;

// aTest 可以是boolean或者string类型
let aTest: boolean | string;

// 2. any类型 表示任意类型，一个变量设置any类型后 等于关闭TS的类型检测， 不建议使用
let aAny: any

aAny = 10;
aAny = '10',
aAny = true;

let aAny2;

// unknown 表示未知类型值
let aUnknown: unknown;
aUnknown = 10;
aUnknown = '10',
aUnknown = true;

let string1 = 1;
// 不会报错
string1 = aAny;
// 会报错 unknownn类型变量 不能直接赋值给其他变量
// string1 =  aUnknown;

//  unknownn类型变量想要赋值给其他变量
// 1. 需要做类型判断
if (typeof aUnknown === 'number') {
  // 做了类型判断不会报错
  string1 = aUnknown;
}
// 2. 使用类型类型断言, 类型断言可以告诉编译器变量的实际类型
  string1 = aUnknown as number;
// 3 等同2， 类型断言另外一种写法
  string1 = <number>aUnknown ;