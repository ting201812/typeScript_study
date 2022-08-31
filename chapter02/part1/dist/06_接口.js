"use strict";
/*
 * @Author: 张玉婷
 * @Date: 2022-08-30 11:21:49
 * @LastEditTime: 2022-08-31 10:28:14
 * @LastEditors: 张玉婷
 * @Description:
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\06_接口.ts
 */
(function () {
    const obj = {
        name: '2134',
        age: 18
    };
    const obj2 = {
        name: 'string',
        age: 12,
        gender: 0,
    };
    // 实现接口就是使用类满足接口的需求
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好');
        }
    }
})();
