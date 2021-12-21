class Stack {
  constructor(){
    this._source = [];

  }

  add(value){
    this._source = [value, ...this._source]

  }

  remove(){
    const firstElement = this._source[0];
    this._source = this._source.filter((item) => {
      return item !== firstElement;
    })
    return firstElement;

  }

  getSource() {
    return [...this._source]
  }
}

const stack1 = new Stack();
stack1.add(1);
stack1.add(2);
stack1.add(3);
stack1.remove();

const source = stack1.getSource();
console.log(source);