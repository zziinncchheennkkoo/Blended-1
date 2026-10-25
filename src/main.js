function calculateSubtotal(price, quantity) {
  return price <= 0 && quantity <= 0 ? 0 : price * quantity;
}

console.log(calculateSubtotal(250, 3)); // 750
console.log(calculateSubtotal(120, 1)); // 120
console.log(calculateSubtotal(250, 0)); // 0

function calculateDiscount(subtotal, isPremium) {
  if (subtotal >= 1000 && isPremium) {
    return subtotal * 0.1;
  } else if (subtotal < 1000 && isPremium) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
}

console.log(calculateDiscount(1200, true)); // 120
console.log(calculateDiscount(800, true)); // 40
console.log(calculateDiscount(1200, false)); // 0
console.log(calculateDiscount(0, true)); // 0

// task-3

function getDeliveryPrice(deliveryType) {
  switch (deliveryType) {
    case 'pickup':
      return 0;
    case 'standard':
      return 80;
    case 'express':
      return 150;
    default:
      return -1;
  }
}

console.log(getDeliveryPrice('pickup')); // 0
console.log(getDeliveryPrice('standard')); // 80
console.log(getDeliveryPrice('express')); // 150
console.log(getDeliveryPrice('drone')); // -1

// task-4
function showPackingProgress(quantity) {
  for (let i = 1; i <= 3; i++) {
    if (quantity <= 0) {
      console.log('Немає товарів для пакування');
      return;
    }

    console.log(`Пакуємо товар ${i} з ${quantity}`);
  }
}

showPackingProgress(3);
showPackingProgress(1);
showPackingProgress(0);
