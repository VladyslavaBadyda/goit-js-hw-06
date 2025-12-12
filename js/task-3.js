class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  // додає рядок у кінець значення властивості 
  padEnd(str) {
    this.value = this.value + str;
    // або this.value += str;
  }

  // додає рядок на початок значення властивості 
  padStart(str) {
    this.value = str + this.value;
  }

  // додає рядок і на початок, і в кінець значення властивості 
  padBoth(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="