import {
  DOWNLOADED_CARDS_FROM_FAVORITES,
  ADDED_TO_FAVORITES,
  REMOVED_FROM_FAVORITES,
} from "../actions/favorites.actions";

const initialState = {
  favoriteProductsId: localStorage.getItem("favorites")?.split(",") || [],
  favoriteProducts: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOADED_CARDS_FROM_FAVORITES:
      return {
        ...state,
        favoriteProducts: action.payload,
      };

    case ADDED_TO_FAVORITES:
      return {
        ...state,
        favoriteProductsId: action.payload,
      };

    case REMOVED_FROM_FAVORITES:
      return {
        ...state,
        favoriteProductsId: action.payload,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
