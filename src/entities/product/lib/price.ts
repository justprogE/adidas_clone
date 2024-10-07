export function convertPrice(price: string, discount: string) {
  return Math.round(+price * (1 - +discount / 100));
}
