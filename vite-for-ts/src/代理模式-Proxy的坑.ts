// // 1. 捕获器不变式

// const obj = { x: 100, y: 0 }
// Object.defineProperty(obj, 'y', {
//     value: 200,
//     writable: false,
//     configurable: false
// })

// const proxy = new Proxy(obj, {
//     get() {
//         return 'abc'
//     }
// })

// console.log(proxy.x)
// console.log(proxy.y)

// // 2. this
// const user = {
//     name: '张三',
//     getName() {
//         console.log('this...', this) // this 是在执行时确定的
//         return this.name
//     }
// }

// const proxy = new Proxy(user, {})

// // user.getName()
// proxy.getName()
