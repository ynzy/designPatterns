// ---------------- 生成器-基本使用 ----------------

function* genNums() {
  yield 10;
  yield 20;
  yield 30;
}
const numsIterator = genNums(); // 迭代器，如 arr[Symbol.Iterator]()
// console.log( numsIterator.next() )
// console.log( numsIterator.next() )
// console.log( numsIterator.next() )
// console.log( numsIterator.next() )

for (let n of numsIterator) {
  console.log(n);
}

// --------------- yield* 语法 ---------------

// function* genNums() {
//     yield* [11, 21, 31] // 有序结构，已经实现了 [Symbol.Iterator]

//     // const arr = [11, 21, 31]
//     // for (let i = 0; i < arr.length; i++) {
//     //     yield arr[i]
//     // }
// }
// const numsIterator = genNums()
// for (let n of numsIterator) {
//     console.log(n)
// }
