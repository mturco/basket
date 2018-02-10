let nextId = 0;

export default class GroceryItemModel {
  constructor(name, qty) {
    this.id = nextId++;
    this.name = name;
    this.qty = qty;
    this.picked = false;
  }
}
