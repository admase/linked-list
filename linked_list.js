/**
 * Linked List Project
 */

// 2. Node class/factory, containing a "value" function and a link to the "nextNode", set both as "null" by default.
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

// 1. Write a linkedlist class/factory to represent the full list
class LinkedList {
  constructor() {
    this.list = null;
    this.length = 0;
  }

  // 3. A function called "append(value)" in your linked list class, that adds a new node containing "value" to the end of the list.
  append(value) {
    let node = new Node(value);
    let current;
    // If empty, make this.list
    if (!this.list) {
      this.list = node;
    } else {
      current = this.list;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // 4. A function called "prepend(value)" in your linked list class, that adds a new node containing "value" to the start of the list.
  prepend(value) {
    this.list = new Node(value, this.list);
    this.length++;
  }

  // 5. A function called "size" that returns the total number of nodes in the list.
  size() {
    return this.length;
  }

  // 6. A function called "head" that returns the first node in the list.
  head() {
    return this.list;
  }

  // 7. A function called "tail" that returns the last node in the list.
  tail() {
    let lastNode = this.list;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  // 8. A function called "at(index)" that returns the node at the given index.
  at(index) {
    let current = this.list;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // 9. A function called "pop" that removes the last element from the list.
  pop() {
    let current = this.list;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  // 10. A function called "contains(value)" that returns true if the passed in value is in the list and otherwise return false.
  contains(value) {
    let current = this.list;
    while (current) {
      if (value === current.value) return true;
      current = current.next;
    }
    return false;
  }

  // 11. A function called "find(value)" that returns the index of the node comtaining value, or null if not found.
  find(value) {
    let count = 0;
    let current = this.list;

    while (current) {
      if (current.value === value) return count;
      current = current.next;
      count++;
    }
    return null;
  }

  // 12. A function called "toString" that represents your linkedlist objects as strings, so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null.
  toString() {
    let current = this.list;
    let str = "";
    while (current) {
      str += `(${current.value}) -> `;
      current = current.next;
    }
    return (str += "null");
  }

  // Extra Credit:
  // 1. insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    // Out of range
    if (index > 0 && index > this.length) {
      return;
    }
    // At first index
    if (index === 0) {
      this.list = new Node(value, this.list);
      return;
    }
    const node = new Node(value);
    let current, previous;

    // Set current to first
    current = this.list;
    let count = 0;
    while (count < index) {
      // Node before index
      previous = current;

      count++;
      // Node after index
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.length++;
  }

  // 2. removeAt(index) that removes the node at the given index.
  removeAt(index) {
    if (index > 0 && index > this.length) {
      return;
    }

    let current = this.list;
    let previous;
    let count = 0;

    // Remove first value
    if (index === 0) {
      this.list = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
  }
}

const ll = new LinkedList();

ll.prepend(100);
ll.prepend(300);
ll.prepend(500);
ll.append(400);
ll.append(200);

// ll.insertAt(800, 1);
// ll.insertAt(10000, 0);

// ll.removeAt(4); // 200
// ll.removeAt(6); // nothing

// ll.at(6); // nothing
// ll.at(0); // 500

// console.log(ll.contains(900)); // false
// console.log(ll.contains(500)); // true

// console.log(ll.find(300)); // 1
// console.log(ll.find(600)); // null

// console.log(ll.head());
// console.log(ll.size());
// console.log(ll.tail());
// console.log(ll.pop());

console.log(ll.toString());
