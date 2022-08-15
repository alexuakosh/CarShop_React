export const DOWNLOADED_CARDS_FROM_FAVORITES =
  "DOWNLOADED_CARDS_FROM_FAVORITES";
export const downloadedCardsFromFavorites = (products) => ({
  type: DOWNLOADED_CARDS_FROM_FAVORITES,
  payload: products,
});

export const ADDED_TO_FAVORITES = "ADDED_TO_FAVORITES";
export const addedToFavorites = (products) => ({
  type: ADDED_TO_FAVORITES,
  payload: products,
});

export const REMOVED_FROM_FAVORITES = "REMOVED_FROM_FAVORITES";
export const removedFromFavorites = (product) => ({
  type: REMOVED_FROM_FAVORITES,
  payload: product,
});