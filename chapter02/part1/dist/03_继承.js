"use strict";
/*
 * @Author: 张玉婷
 * @Date: 2022-08-30 10:13:57
 * @LastEditTime: 2022-08-30 10:44:45
 * @LastEditors: 张玉婷
 * @Description:
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\03_继承.ts
 */
// 这里使用立即执行函数 是因为防止命名冲突
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    // 使用继承可以将多个类中共有的方法属性写在一个类中
    // 使用继承后 子类拥有父类所有的方法和属性
    // 可以在子类中 添加父类没有的属性和方法
    //  如果在子类中添加和父类相同方法, 则子类会覆盖父类方法 --- 重写
    // 使Dog类继承Animal类, 此时Animal为父类, Dog为子类, 
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑`);
        }
        sayHello() {
            console.log('汪汪');
        }
    }
    // 使Cat类继承Animal类 此时Animal为父类,cat为子类
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵');
        }
    }
    const dog = new Dog('小狗', 4);
    console.log('dog', dog);
    console.log(dog.run());
    console.log(dog.sayHello());
    const cat = new Cat('小猫', 3);
    console.log('cat', cat);
    console.log(cat.sayHello());
})();
