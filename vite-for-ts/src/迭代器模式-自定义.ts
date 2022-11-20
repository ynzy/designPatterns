// --------------- 自定义迭代器 ---------------

class CustomIterator {
  private data: number[];
  constructor() {
    this.data = [100, 200, 300];
  }
  *[Symbol.iterator]() {
    yield* this.data;
  }
}
const iterator2 = new CustomIterator();
for (let n of iterator2) {
  console.log(n);
}
