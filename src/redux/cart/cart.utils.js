export const addItemToCart = (
  { cartItems, cartItems: { itemCount } },
  item
) => {
  const { id } = item;
  if (cartItems[id]) {
    let { count } = cartItems[id];
    return {
      ...cartItems,
      [id]: { ...item, count: (count += 1) },
      itemCount: (itemCount += 1)
    };
  } else {
    return {
      ...cartItems,
      [id]: { ...item, count: 1 },
      itemCount: (itemCount += 1)
    };
  }
};

export const deleteItemFromCart = (
  { cartItems, cartItems: { itemCount } },
  item
) => {
  const { id } = item;

  if (!cartItems[id]) {
    return {
      ...cartItems
    };
  } else if (cartItems[id].count >= 1) {
    let { count } = cartItems[id];

    return {
      ...cartItems,
      [id]: { ...item, count: (count -= 1), itemCount: (itemCount -= 1) }
    };
  } else {
    delete cartItems[id];
    return { ...cartItems, itemCount: (itemCount -= 1) };
  }
};

export const clearItemFromCart = (
  { cartItems, cartItems: { itemCount } },
  item
) => {
  const { id } = item;
  if (!cartItems[id]) {
    return {
      ...cartItems
    };
  } else {
    let { count } = cartItems[id];
    delete cartItems[id];
    return { ...cartItems, itemCount: (itemCount -= count) };
  }
};
