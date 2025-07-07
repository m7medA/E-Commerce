export function priceAfterDiscount(price, discount) {
  const result = price - price * (discount / 100);
  return Math.ceil(result * 100) / 100;
}
