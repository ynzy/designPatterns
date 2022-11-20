// --------------- mitt ---------------
// import mitt from 'mitt'

// const emitter = mitt() // 单例

// emitter.on('change', () => {
//     console.log('change1')
// })
// emitter.on('change', () => {
//     console.log('change2')
// })

// // 没有 once

// emitter.emit('change')
// emitter.emit('change')
// emitter.emit('change')

// --------------- emitter ---------------

import eventEmitter from "event-emitter";

const emitter = eventEmitter(); // 单例模式

emitter.on("change", (value: string, name: string) => {
  console.log("change1", value, name);
});
emitter.on("change", () => {
  console.log("change2");
});
emitter.once("change", () => {
  console.log("change3");
});

emitter.emit("change", "aaa", "双越");
emitter.emit("change", "bbb");
emitter.emit("change", "ccc");
