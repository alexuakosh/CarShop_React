import { setCardToCart } from "../actions/modal.actions";

export const openModal = (id) => {
  return (dispatch) => {
    dispatch(setCardToCart(id));
  };
};

export const closeModal = () => {
  return (dispatch) => {
    dispatch(setCardToCart(""));
  };
};
