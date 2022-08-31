/*
 * @Author: 张玉婷
 * @Date: 2022-08-30 11:21:49
 * @LastEditTime: 2022-08-31 10:28:14
 * @LastEditors: 张玉婷
 * @Description: 
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\06_接口.ts
 */
(
  function () {
    // 使用别名描述对象类型
    type myType = {
      name: string,
      age: number,
    }

    const obj: myType = {
      name: '2134',
      age: 18
    }

    // 定义一个接口结构
    // 接口用来定义类中包含哪些属性和方法
    // 也可以当成类型声明去使用
    // 接口可以重复声明， 同名接口 里面声明的属性会叠加， 别名不可以重复声明
    interface myInterface {
      name: string;
      age: number;
    }

    interface myInterface {
      gender: number
    }

    const obj2: myInterface = {
      name: 'string',
      age: 12,
      gender: 0,
    }

    // 接口可以在定义类的时候限制类的结构
    // 接口的所有属性不能有实际的值， 接口只定义对象的结构 而不考虑实际值
    // 接口中所有的方法都是抽象方法
    interface myInter {
      name: string;
      sayHello(): void;
    }

    // 实现接口就是使用类满足接口的需求
    class MyClass implements myInter {
      name: string;

      constructor(name: string) {
        this.name = name;
      }
      sayHello(): void {
        console.log('大家好')
          
      }
    }
  }
)()