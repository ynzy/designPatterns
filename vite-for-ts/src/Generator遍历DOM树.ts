// Generator + yield 遍历 DOM 树

function* traverse(elemList: Element[]): any {
  for (const elem of elemList) {
    yield elem;

    const children = Array.from(elem.children);
    if (children.length) {
      yield* traverse(children);
    }
  }
}

const container2 = document.getElementById("container");
if (container2) {
  for (let node of traverse([container2])) {
    console.log(node);
  }
}
