// class Foo {
//     fn1() {
//         log() // 记录日志
//         console.log('业务功能 - 点赞')
//     }

//     fn2() {
//         log()
//         console.log('业务功能 - 回复')
//     }
// }

// function log () {
//     console.log('记录日志')
// }

function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const oldValue = descriptor.value; // 值，函数

  // 重新定义 fn1 方法
  descriptor.value = function () {
    console.log("记录日志");
    return oldValue.apply(this, arguments);
  };
}

class Foo4 {
  @log
  fn1() {
    console.log("业务功能 - 点赞");
  }
}

const f4 = new Foo4();
f4.fn1();
