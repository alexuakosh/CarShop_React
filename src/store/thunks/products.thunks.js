import { downloadAllCardsRequested, downloadAllCardsSuccess, downloadAllCardsError } from "../actions/products.actions";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(downloadAllCardsRequested());
    fetch("./products.json")
      .then((response) => response.json())
      .then((products) => {
        setTimeout(() => {
          dispatch(downloadAllCardsSuccess(products));
        }, 2000);
      })
      .catch((e) => {
        dispatch(downloadAllCardsError());
      });
  };
};

export const productsToShow = (productList, productsToShowId) => {
  const products = [];
  productList.forEach((product) => {
    productsToShowId.forEach((productToShowId) => {
      if (product.id === productToShowId) {
        products.push(product);
      }
    });
  });

  return products;
};
