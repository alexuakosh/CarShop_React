import {
  DOWNLOADED_CARDS_FROM_CART,
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  PURCHASED_PRODUCTS,
} from "../actions/cart.actions";

const initialState = {
  productsToCartId: localStorage.getItem("cart")?.split(",") || [],
  productsToCart: [],
  purchasedProductsInfo: {
    products: [],
    buyerInfo: null,
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOADED_CARDS_FROM_CART:
      return {
        ...state,
        productsToCart: action.payload,
      };

    case ADDED_TO_CART:
      return {
        ...state,
        productsToCartId: action.payload,
      };

    case REMOVED_FROM_CART:
      return {
        ...state,
        productsToCartId: action.payload,
      };

    case PURCHASED_PRODUCTS:
      return {
        ...state,
        purchasedProductsInfo: {
          products: state.productsToCart,
          buyerInfo: action.payload,
        },
        productsToCartId: [],
        productsToCart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
