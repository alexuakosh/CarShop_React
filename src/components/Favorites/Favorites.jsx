import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import {
  cardToCartIdSelector,
  downloadRequestStateSelector,
  favoriteProductsIdSelector,
  favoriteProductsSelector,
  productsSelector,
} from "../../store/selectors/selectors";
import { fetchProducts, productsToShow } from "../../store/thunks/products.thunks";
import { openModal, closeModal } from "../../store/thunks/modal.thunks";
import { addToCart } from "../../store/thunks/cart.thunks";
import { removeFromFavorites } from "../../store/thunks/favorites.thunks";
import { downloadedCardsFromFavorites } from "../../store/actions/favorites.actions";

function Favorites() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);
  const cardToCartId = useSelector(cardToCartIdSelector);
  const favoriteProductsId = useSelector(favoriteProductsIdSelector);
  const favoriteProducts = useSelector(favoriteProductsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const cardsFromFavorites = productsToShow(productList, favoriteProductsId);
    dispatch(downloadedCardsFromFavorites(cardsFromFavorites));
  }, [productList, favoriteProductsId]);

  const addProductToCart = () => {
    dispatch(addToCart());
    dispatch(closeModal());
  };

  const removeProductFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div style={{ minWidth: "100%", textAlign: "center" }}>
        {!favoriteProducts.length && downloadRequestState === "success" && (
          <div style={{ fontSize: "30px" }}>
            Currently, there are no favorite products
          </div>
        )}
        {downloadRequestState === "success" &&
          favoriteProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.favorites}
                name={product.name}
                color={product.color}
                code={product.code}
                price={product.price}
                openModal={openModal}
                removeFromFavorites={removeProductFromFavorites}
                isFavorite={
                  favoriteProductsId.includes(product.id) ? true : false
                }
                btnColor={"green"}
                btnText={"Add to cart"}
              />
            );
          })}
      </div>

      {cardToCartId !== "" && (
        <>
          <div onClick={handleCloseModal} className="blackback"></div>
          <Modal
            header="Do you want to add this?"
            text="When you click 'Ok' this car will be added to your cart"
            color="green"
            closeModal={closeModal}
            actions={
              <div className="modal-btns">
                <Button
                  text="Ok"
                  func={addProductToCart}
                  color="black"
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

export default Favorites;
