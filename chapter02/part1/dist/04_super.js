"use strict";
/*
 * @Author: 张玉婷
 * @Date: 2022-08-30 10:49:40
 * @LastEditTime: 2022-08-30 10:59:46
 * @LastEditors: 张玉婷
 * @Description:
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\04_super.ts
 */
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        // 如果在子类写了构造函数, 那么他会覆盖掉父类的构造函数
        // 所以需要 使用super关键字调用父类构造函数
        constructor(name, age) {
            // 调用父类构造函数
            super(name);
            this.age = age;
        }
        sayHello() {
            //  在类方法中, super表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 14);
    console.log(dog.sayHello());
})();
