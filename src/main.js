function calculateSubtotal(price, quantity) {
  return price <= 0 && quantity <= 0 ? 0 : price * quantity;
}

function calculateDiscount(subtotal, isPremium) {
  if (subtotal >= 1000 && isPremium) {
    return subtotal * 0.1;
  } else if (subtotal < 1000 && isPremium) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
}

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

function showPackingProgress(quantity) {
  if (quantity <= 0) {
    console.log('Немає товарів для пакування');
    return;
  }

  for (let i = 1; i <= quantity; i++) {
    console.log(`Пакуємо товар ${i} з ${quantity}`);
  }
}

function createOrderSummary(
  productName,
  price,
  quantity,
  isPremium,
  deliveryType
) {
  const subtotal = calculateSubtotal(price, quantity);

  if (subtotal == 0) {
    return 'Замовлення неможливо оформити.';
  }

  const discount = calculateDiscount(subtotal, isPremium);
  const deliveryCost = getDeliveryPrice(deliveryType);

  if (deliveryCost == -1) {
    return 'Невідомий спосіб доставки.';
  }

  const totalCost = subtotal - discount + deliveryCost;
  showPackingProgress(quantity);

  return `Товар: ${productName}. Кількість: ${quantity}.  До сплати: ${totalCost} грн`;
}

console.log(createOrderSummary('Навушники', 250, 4, true, 'standard'));
// Товар: Навушники. Кількість: 4. До сплати: 980 грн.

console.log(createOrderSummary('Клавіатура', 800, 1, true, 'pickup'));
// Товар: Клавіатура. Кількість: 1. До сплати: 760 грн.

console.log(createOrderSummary('Миша', 500, 0, false, 'express'));
// Замовлення неможливо оформити

console.log(createOrderSummary('Монітор', 5000, 1, false, 'drone'));
// Невідомий спосіб доставки
