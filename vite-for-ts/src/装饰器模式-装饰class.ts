// --------------- 装饰器-装饰class ---------------
function testable(target: any) {
  target.isTestable = true;
}

@testable
class Foo2 {
  static isTestable?: boolean;
}

console.log(Foo2.isTestable); // true

// --------------- 装饰器-class传参 ---------------
// 装饰器工厂函数
function testable1(val: boolean) {
  // 装饰器
  return function (target: any) {
    target.isTestable = val;
  };
}

@testable1(false)
class Foo1 {
  static isTestable?: boolean;
}

console.log(Foo1.isTestable); // false
