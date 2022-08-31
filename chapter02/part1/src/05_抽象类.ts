/*
 * @Author: 张玉婷
 * @Date: 2022-08-30 10:49:40
 * @LastEditTime: 2022-08-30 11:19:44
 * @LastEditors: 张玉婷
 * @Description: 
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\05_抽象类.ts
 */
(
  function () {
    //  以abstract关键字修饰的类, 抽象类不能实例化
    //  抽象类 是用来继承的
    abstract class Animal {
      name: string;

      constructor(name: string) {
        this.name = name;
      }
      //  抽象类中可以添加抽象方法
      //  抽象方法使用abstract关键字修饰， 且没有方法体
      //  抽象方法只能定义在抽象类中， 子类必须对抽象方法进行重写
      abstract sayHello ():  void
    }

    class Dog extends Animal {
      sayHello(): void {
        console.log('汪汪')
      }
    }

    const dog = new Dog('旺财');
    //  错误 抽象类不能实例化
    // const animal = new Animal('大公鸡')
  }
)()