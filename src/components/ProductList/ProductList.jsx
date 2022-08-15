import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { cardToCartIdSelector, downloadRequestStateSelector, favoriteProductsIdSelector, productsSelector } from "../../store/selectors/selectors";
import { fetchProducts } from "../../store/thunks/products.thunks";
import { openModal, closeModal } from "../../store/thunks/modal.thunks";
import { addToCart } from "../../store/thunks/cart.thunks";
import { addToFavorites, removeFromFavorites } from "../../store/thunks/favorites.thunks";


function ProductList() {
  const downloadRequestState = useSelector(downloadRequestStateSelector);
  const productList = useSelector(productsSelector);
  const cardToCartId = useSelector(cardToCartIdSelector);
  const favoriteProductsId = useSelector(favoriteProductsIdSelector);
    

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addProductToCart = () => {
    dispatch(addToCart());
    dispatch(closeModal());
  };

  const addProductToFavorites = (id) => {
    dispatch(addToFavorites(id));
  };

  const removeProductFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div>
       

        {downloadRequestState === "success" && productList.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.img}
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

export default ProductList;
