type TotalPriceInput = {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
};

type TotalPriceOutput = number;

const totalPrice = ({ price, discount, isInstallment, months }: TotalPriceInput): TotalPriceOutput => {
  let total = price;

  // Расчет скидки
  total -= (price * discount) / 100;

  // Расчет рассрочки
  if (isInstallment) {
      total /= months;
  }

  return total;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
