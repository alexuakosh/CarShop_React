export const DOWNLOADED_CARDS_FROM_CART = "DOWNLOADED_CARDS_FROM_CART";
export const downloadedCardsFromCart = (products) => ({
  type: DOWNLOADED_CARDS_FROM_CART,
  payload: products,
});

export const ADDED_TO_CART = "ADDED_TO_CART";
export const addedToCart = (products) => ({
  type: ADDED_TO_CART,
  payload: products,
});

export const REMOVED_FROM_CART = "REMOVED_FROM_CART";
export const removedFromCart = (products) => ({
  type: REMOVED_FROM_CART,
  payload: products,
});

export const PURCHASED_PRODUCTS = "PURCHASED_PRODUCTS";
export const purchasedProducts = (info) => ({
  type:  PURCHASED_PRODUCTS,
  payload: info,
});

