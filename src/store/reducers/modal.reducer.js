import { SET_CARD_TO_CART } from "../actions/modal.actions";

const initialState = {
  cardToCartId: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_TO_CART:
      return {
        ...state,
        cardToCartId: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducer;
