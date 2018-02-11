function createId() {
  return Math.random().toString(36).substr(2, 8);
}

export default class GroceryItemModel {
  constructor(name, qty) {
    this.id = createId();
    this.name = name;
    this.qty = qty;
    this.picked = false;
  }
}
