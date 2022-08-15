import {
  addedToCart,
  removedFromCart,
  purchasedProducts,
} from "../actions/cart.actions";

export const addToCart = () => {
  return (dispatch, getState) => {
    const { cart, modal } = getState();
    const updatedCartId = [...cart.productsToCartId, modal.cardToCartId];

    if (!cart.productsToCartId.includes(modal.cardToCartId)) {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", updatedCartId);
      dispatch(addedToCart(updatedCartId));
    }
  };
};

export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updatedProductsToCart = cart.productsToCartId.filter((productId) => {
      return productId !== id;
    });
    localStorage.removeItem("cart");
    if (updatedProductsToCart.length > 0) {
      localStorage.setItem("cart", updatedProductsToCart);
    }

    dispatch(removedFromCart(updatedProductsToCart));
  };
};

export const purchaseProducts = (info) => {
  return (dispatch) => {
    dispatch(purchasedProducts(info));
    localStorage.removeItem("cart");
  };
};
