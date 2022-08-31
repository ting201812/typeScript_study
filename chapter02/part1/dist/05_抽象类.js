"use strict";
/*
 * @Author: 张玉婷
 * @Date: 2022-08-30 10:49:40
 * @LastEditTime: 2022-08-30 11:19:44
 * @LastEditors: 张玉婷
 * @Description:
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\05_抽象类.ts
 */
(function () {
    //  以abstract关键字修饰的类, 抽象类不能实例化
    //  抽象类 是用来继承的
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪');
        }
    }
    const dog = new Dog('旺财');
    //  错误 抽象类不能实例化
    // const animal = new Animal('大公鸡')
})();
