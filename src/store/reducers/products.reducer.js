import {
  DOWNLOAD_ALL_CARDS_SUCCESS,
  DOWNLOAD_ALL_CARDS_REQUESTED,
  DOWNLOAD_ALL_CARDS_ERROR,
} from "../actions/products.actions";

const initialState = {
  downloadRequestState: "idle",
  productList: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_ALL_CARDS_REQUESTED:
      return {
        ...state,
        downloadRequestState: "loading",
      };

    case DOWNLOAD_ALL_CARDS_SUCCESS:
      return {
        ...state,
        downloadRequestState: "success",
        productList: action.payload,
      };

    case DOWNLOAD_ALL_CARDS_ERROR:
      return {
        ...state,
        downloadRequestState: "error",
      };

    default:
      return state;
  }
};

export default productsReducer;
