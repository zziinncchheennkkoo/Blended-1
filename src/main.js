function calculateSubtotal(price, quantity) {
  return price <= 0 && quantity <= 0 ? 0 : price * quantity;
}

console.log(calculateSubtotal(250, 3)); // 750
console.log(calculateSubtotal(120, 1)); // 120
console.log(calculateSubtotal(250, 0)); // 0
