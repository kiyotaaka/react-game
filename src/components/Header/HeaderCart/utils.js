export const calcTotalPrice = (items) =>
  items.reduce((acc, { price }) => (acc += price), 0);
