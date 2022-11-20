class Singleton {
  // private - 外部无法初始化
  private constructor() {}

  // static 属性
  private static instance: Singleton | null;

  // static 方法
  static getInstance(): Singleton {
    // 这里也可以写 `this.instance` ，注意和实例方法中 this 的区别！！！
    if (Singleton.instance == null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// const s1 = new Singleton() // 直接初始化会报错
// Singleton.instance // 直接访问 instance 也会报错

// 创建实例
const s1 = Singleton.getInstance(); // 正确获取单里对象的方式
const s2 = Singleton.getInstance();

console.log(s1 === s2); // true
