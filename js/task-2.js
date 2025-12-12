class Storage {
  constructor(items) {
    this.items = items;
  }

  // повертає масив товарів
  getItems() {
    return this.items;
  }

  // додає новий товар 
  addItem(newItem) {
    this.items.push(newItem);
  }

  // видаляє товар з масиву
  removeItem(itemToRemove) {
    const index = this.items.indexOf(itemToRemove);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems()); 

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scanner");
console.log(storage.getItems()); 
