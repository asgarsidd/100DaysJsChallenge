// program to implement stack data structure
class Stack {
  constructor() {
    this.items = [];
  }

  // add element to the stack 📥
  add(element) {
    return this.items.push(element);
  }

  // remove element from the stack 🗑️
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // view the last element 🔍
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty ⌛
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the stack 🐘
  size() {
    return this.items.length;
  }

  // empty the stack 🗑️
  clear() {
    this.items = [];
  }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
stack.add("Number");
console.log(stack.items); //Output items:
console.log(stack.remove()); //Removed Number: "Number"
console.log(stack.items); //Output items: [1,2,4, 8]
console.log(stack.peek()); //Output peek: 8
console.log(stack.isEmpty()); //Output isEmpty: false
console.log(stack.size()); //Output Size: 3
stack.clear(); //For Clear Stack
console.log(stack.items); // Output : [] (Empty Stack)
