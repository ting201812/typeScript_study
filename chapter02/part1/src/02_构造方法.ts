/*
 * @Author: 张玉婷
 * @Date: 2022-08-30 09:46:00
 * @LastEditTime: 2022-08-30 10:09:11
 * @LastEditors: 张玉婷
 * @Description: 
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\02_构造方法.ts
 */
class Dog {
  name: string;
  age: number;

  // 构造方法, 实例创建的时候调用
  constructor (name: string, age: number) {
    // 在实例方法中 this表示当前的实例
    // 在构造函数中当前对象值得是当前新建的对象
    // 可以通过this给新创建的对象添加属性
    this.name = name;
    this.age = age;

  }

  bark () {
    console.log(this)
  }
}

const dog = new Dog('小黑', 4);
const dog1 = new Dog('小白', 4);

console.log(dog.bark())
console.log(dog1.bark())