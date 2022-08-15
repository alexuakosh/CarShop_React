export const DOWNLOAD_ALL_CARDS_REQUESTED = "DOWNLOAD_ALL_CARDS_REQUESTED";
export const downloadAllCardsRequested = (products) => ({
  type: DOWNLOAD_ALL_CARDS_REQUESTED,
});

export const DOWNLOAD_ALL_CARDS_SUCCESS = "DOWNLOAD_ALL_CARDS_SUCCESS";
export const downloadAllCardsSuccess = (products) => ({
  type: DOWNLOAD_ALL_CARDS_SUCCESS,
  payload: products,
});

export const DOWNLOAD_ALL_CARDS_ERROR = "DOWNLOAD_ALL_CARDS_ERROR";
export const downloadAllCardsError = (products) => ({
  type: DOWNLOAD_ALL_CARDS_ERROR,
});