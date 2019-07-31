export const addItemToCart = (
  { cartItems, cartItems: { itemCount }, cartItems: { cartTotal } },
  item
) => {
  const { id, price } = item;
  if (cartItems[id]) {
    let { count } = cartItems[id];

    return {
      ...cartItems,
      [id]: { ...item, count: (count += 1) },
      itemCount: (itemCount += 1),
      cartTotal: (cartTotal += price)
    };
  } else {
    return {
      ...cartItems,
      [id]: { ...item, count: 1 },
      itemCount: (itemCount += 1),
      cartTotal: (cartTotal += price)
    };
  }
};

export const deleteItemFromCart = (
  { cartItems, cartItems: { itemCount }, cartItems: { cartTotal } },
  item
) => {
  const { id, price } = item;

  if (!cartItems[id]) {
    return {
      ...cartItems
    };
  } else if (cartItems[id].count >= 1) {
    let { count } = cartItems[id];
    return {
      ...cartItems,
      [id]: { ...item, count: (count -= 1) },
      itemCount: (itemCount -= 1),
      cartTotal: (cartTotal -= price)
    };
  } else {
    delete cartItems[id];
    return {
      ...cartItems,
      itemCount: (itemCount -= 1),
      cartTotal: (cartTotal -= price)
    };
  }
};

export const clearItemFromCart = (
  { cartItems, cartItems: { itemCount }, cartItems: { cartTotal } },
  item
) => {
  const { id, price } = item;
  if (!cartItems[id]) {
    return {
      ...cartItems
    };
  } else {
    let { count } = cartItems[id];
    delete cartItems[id];
    return {
      ...cartItems,
      itemCount: (itemCount -= count),
      cartTotal: (cartTotal -= count * price)
    };
  }
};
