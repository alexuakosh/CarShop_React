export const downloadRequestStateSelector = (state) => {
  return state.products.downloadRequestState;
};

export const productsSelector = (state) => {
  return state.products.productList;
};

export const cardToCartIdSelector = (state) => {
  return state.modal.cardToCartId;
};

export const productsToCartIdSelector = (state) => {
  return state.cart.productsToCartId;
};

export const productsToCartSelector = (state) => {
  return state.cart.productsToCart;
};

export const favoriteProductsIdSelector = (state) => {
  return state.favorites.favoriteProductsId;
};

export const favoriteProductsSelector = (state) => {
  return state.favorites.favoriteProducts;
};

export const purchasedProductsSelector = (state) => {
  return state.cart.purchasedProductsInfo;
};
