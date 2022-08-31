"use strict";
/*
 * @Author: 张玉婷
 * @Date: 2022-08-29 17:57:38
 * @LastEditTime: 2022-08-30 09:42:17
 * @LastEditors: 张玉婷
 * @Description:
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\01_类.ts
 */
// 使用class创建一个类
// 对象中 主要是有属性\方法
class Person {
    constructor() {
        // 定义属性(实例属性)
        this.name = 'zs';
        this.age = 18;
        // 只读属性
        this.phone = '1234';
    }
    // 方法
    sayHello() {
        console.log('大家好');
    }
    // 方法
    static sayHelloStatic() {
        console.log('大家好, 我是静态方法');
    }
}
// 静态属性  类属性 通过类去访问
Person.address = '南京市';
// 静态只读属性
Person.email = '1234';
const p = new Person();
console.log(p.name);
console.log(p.age);
// 错误
// console.log(p.address)
// 正确
console.log(Person.address);
// 正确
console.log(p.phone);
// 错误 不可以修改
// p.phone = '2344'
// 错误
// Person.email = '334'
console.log('first', p);
p.sayHello();
Person.sayHelloStatic();
