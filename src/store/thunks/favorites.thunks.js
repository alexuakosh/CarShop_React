import { addedToFavorites, removedFromFavorites } from "../actions/favorites.actions";

export const addToFavorites = (id) => {
  return (dispatch, getState) => {
    const { favorites } = getState();
    const updatedFavoritesId = [...favorites.favoriteProductsId, id];
    localStorage.removeItem("favorites");
    localStorage.setItem("favorites", updatedFavoritesId);
    dispatch(addedToFavorites(updatedFavoritesId));
  };
};

export const removeFromFavorites = (id) => {
  return (dispatch, getState) => {
    const { favorites } = getState();
    const updatedFavoritesId = favorites.favoriteProductsId.filter((productId) => {
      return productId !== id;
    });

    localStorage.removeItem("favorites");
    if (updatedFavoritesId.length > 0) {
      localStorage.setItem("favorites", updatedFavoritesId);
    }

    dispatch(removedFromFavorites(updatedFavoritesId));
  };
};
