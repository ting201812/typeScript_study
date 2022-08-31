/*
 * @Author: 张玉婷
 * @Date: 2022-08-31 10:32:51
 * @LastEditTime: 2022-08-31 13:25:05
 * @LastEditors: 张玉婷
 * @Description: 
 * @FilePath: \typeScript\typeScript\chapter02\part1\src\08_泛型.ts
 */

// 需求 当声明方法和类的时候 不缺定是啥类型的时候 就可以使用泛型

/**
 * 使用any相当于把 ts语法检查关闭了 不推荐
 * @param a 
 * @returns 
 */
function fn (a: any ): any {
  return a;
}

/**
 * 定义函数或者类遇到类型不明确的时候就可以定义泛型
 */

function fn1<T>(a: T): T {
  return a;
}
// 不指定泛型 ts进行类型推断
fn1(19)
// 指定了泛型 为string
fn1<string>('hello')

// 定义多个泛型
function fn2<K, T>(a: K, b: T): K {
  console.log('b', b)

  return a;
}

fn2<number, string>(123, 'hello');

//  对泛型进行限制
interface Inter {
  length: number
}
// 泛型是实现Inter接口， 泛型实现接口使用的是 extends
function  fn3<T extends Inter>(a: T): number {
  return a.length;
}
// 正确  124字符串类型 有length属性 
fn3('124')
// 错误 124数字类型 没有length属性
// fn3(124)

class MyClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const t = new MyClass<string>('孙悟空')

