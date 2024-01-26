const shoppingCart = {
  items: [],
  total: 0,
  addToTotal(newValue) {
    this.total += newValue; // Corrected to 'this.total'
    return this.total;
  },
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
    this.addToTotal(price * quantity); // Multiply price by quantity
    return this.items; // optional
  },
  removeItem(name) {
      let itemRemoved = false;
      this.items = this.items.filter(item => {
          if (item.name === name) {
              this.addToTotal(-(item.price * item.quantity)); // Adjust total when item is removed
              itemRemoved = true;
              return false; // Exclude this item
          }
          return true; // Include other items
      });

      return itemRemoved; // Optional: return whether an item was removed
  },
  updateQuantity(name, newQuantity) {
      let itemUpdated = false;
      // considering the fact that we have only unique items
      for (let item of this.items) {
          if (item.name === name) {
              this.addToTotal(-(item.price * item.quantity));
              item.quantity = newQuantity;
              this.addToTotal(item.price * item.quantity);

              itemUpdated = true;
              break;
          }
      }
    return itemUpdated // optional return whether an item was Updated
    },
  calculateTotal() { // assuming that every item will be added with the addItem method
  return this.total;
  },
  clearCart() {
  this.items = [];
  this.total = 0;
  return this.items;
  }
};


console.log('the first addition', shoppingCart.addItem('phone', 100, 2));
console.log('the second addition', shoppingCart.addItem('phone2', 200, 2));
shoppingCart.removeItem('phone2')
console.log('removing an item called phone 2', shoppingCart.items);
console.log('calculateTotal', shoppingCart.calculateTotal())
shoppingCart.updateQuantity('phone', 4);
console.log('updateQuantity', shoppingCart.items)
console.log('clearCart', shoppingCart.clearCart())
