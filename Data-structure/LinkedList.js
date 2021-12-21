class LinkedList {
  constructor() {
    this.root = {
      data: null,
      next: null,
    }
  }

  append(value){
    const node = {
      data: value,
      next: null,
    }

    let lastNode = this.root;

    while(lastNode.next !== null){
      lastNode = lastNode.next;
    }

    lastNode.next = node;
  }

  find(value){
    let targetNode = this.root;

    while(targetNode.data !== value && targetNode.next !== null){
      targetNode = targetNode.next;
    }

    return targetNode.data === value ? targetNode : null;
  }

  add(valueToAdd, valueAfter){
    let addNode = this.root;

    while(addNode.data !== valueAfter && addNode.next !== null){
      addNode = addNode.next

    }

    addNode.next = {
      data: valueToAdd,
      next: addNode.next
    }

  }

  delete(value){
    let deleteNode = this.root;
    let previousNode;

    while(deleteNode.data !== value && deleteNode.next !== null){
      previousNode = deleteNode;
      deleteNode = deleteNode.next;
    }

    previousNode.next = deleteNode.next;
  }


  print() {
    console.log(this.root)
  }

}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(2);
LinkedList1.append(22222);
LinkedList1.append(3142);
LinkedList1.append(21);




LinkedList1.add(5, 22222);
LinkedList1.delete(2)
LinkedList1.print();



