import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import {
  cardToCartIdSelector,
  downloadRequestStateSelector,
  favoriteProductsIdSelector,
  productsSelector,
  productsToCartIdSelector,
  productsToCartSelector,
  purchasedProductsSelector,
} from "../../store/selectors/selectors";
import {
  fetchProducts,
  productsToShow,
} from "../../store/thunks/products.thunks";
import { openModal, closeModal } from "../../store/thunks/modal.thunks";
import { removeFromCart } from "../../store/thunks/cart.thunks";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/thunks/favorites.thunks";
import { downloadedCardsFromCart } from "../../store/actions/cart.actions";
import PurchaseForm from "../PurchaseForm.jsx/PurchaseForm";

function Cart() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);
  const cardToCartId = useSelector(cardToCartIdSelector);
  const favoriteProductsId = useSelector(favoriteProductsIdSelector);
  const productsToCartId = useSelector(productsToCartIdSelector);
  const productsToCart = useSelector(productsToCartSelector);
  const purchasedProductsInfo = useSelector(purchasedProductsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const cardsFromCart = productsToShow(productList, productsToCartId);
    dispatch(downloadedCardsFromCart(cardsFromCart));
  }, [productList, productsToCartId]);

  useEffect(() => {
    if (purchasedProductsInfo.buyerInfo !== null) {
      console.log("PURCHASED PRODUCTS ARE:");
      purchasedProductsInfo.products.forEach((product) => {
        console.log(product.name);
      });

      console.log();

      console.log("BUYER'S INFO:");
      for (const [key, value] of Object.entries(
        purchasedProductsInfo.buyerInfo
      )) {
        console.log(`${key} - ${value}`);
      }
    }
  }, [purchasedProductsInfo]);

  const addProductToFavorites = (id) => {
    dispatch(addToFavorites(id));
  };

  const removeProductFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const removeProductFromCart = (e) => {
    dispatch(removeFromCart(e.target.dataset.id));
    dispatch(closeModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div style={{ minWidth: "100%", textAlign: "center" }}>
        {!productsToCart.length && downloadRequestState === "success" && (
          <div style={{ fontSize: "30px" }}>
            Currently, there are no products in cart
          </div>
        )}

        {downloadRequestState === "success" &&
          productsToCart.map((product) => {
            return (
              <>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.favorites}
                  name={product.name}
                  color={product.color}
                  code={product.code}
                  price={product.price}
                  openModal={openModal}
                  addToFavorites={addProductToFavorites}
                  removeFromFavorites={removeProductFromFavorites}
                  isFavorite={
                    favoriteProductsId.includes(product.id) ? true : false
                  }
                  btnColor={"red"}
                  btnText={"Remove from cart"}
                />
              </>
            );
          })}
      </div>

      {productsToCart.length > 0 && downloadRequestState === "success" && <PurchaseForm />}

      {cardToCartId !== "" && (
        <>
          <div onClick={handleCloseModal} className="blackback"></div>
          <Modal
            header="Do you want to delete this?"
            text="When you click 'Ok' this car will be deleted from your cart"
            color="red"
            closeModal={closeModal}
            actions={
              <div className="modal-btns">
                <Button
                  text="Ok"
                  func={removeProductFromCart}
                  color="black"
                  data-id={cardToCartId}
                ></Button>
                <Button
                  text="Cancel"
                  func={handleCloseModal}
                  color="grey"
                ></Button>
              </div>
            }
          />
        </>
      )}
    </>
  );
}

export default Cart;
