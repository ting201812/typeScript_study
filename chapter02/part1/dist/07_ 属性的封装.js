"use strict";
/*
 * @Author: 张玉婷
 * @Date: 2022-08-31 10:32:51
 * @LastEditTime: 2022-08-31 11:23:38
 * @LastEditors: 张玉婷
 * @Description:
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\07_ 属性的封装.ts
 */
(function () {
    // 定一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // 获取name属性
        getName() {
            return this._name;
        }
        // 设置name属性
        setName(name) {
            this._name = name;
        }
        // ts中设置getter方法
        get name() {
            return this._name;
        }
        // ts中设置setter方法
        set name(name) {
            this._name = name;
        }
    }
    const per = new Person('sun', 18);
    // public修饰, 直接修改属性， 会导致对象中的数据不安全
    // per._age = 30 
    // per._name = 'zs'
    per.setName('zs');
    console.log(per.getName());
    // 实际上调用了 name（）方法
    console.log(per.name);
    per.name = 'zbj';
    console.log(per.name);
    class A {
        constructor(num) {
            this.publicNum = num;
            this.privateNum = num;
            this.protectedNum = num;
        }
    }
    class B extends A {
        test() {
            // public 属性 是可以在子类中被访问
            console.log(this.publicNum);
            // private 属性 是不可以在子类中被访问
            // console.log(this.privateNum)
            // protected 属性 是可以在子类中被访问
            console.log(this.protectedNum);
        }
    }
    const b = new B(1);
    // 错误 protected只能在当前类或者子类内部访问， 不能通过实例访问
    // console.log(b.protectedNum)
    // class C {
    //   name: string
    //   constructor (name: string) {
    //     this.name = name
    //   }
    // }
    class C {
        constructor(name) {
            this.name = name;
        }
    }
    const c = new C('124');
    console.log('c', c);
})();
