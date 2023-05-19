import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "./FoodCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="flex p-2 m-2 gap-2">
        <h1>Cart Items</h1>
        <button
          className=" bg-green-200"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex">
        {cartItems.map((item) => {
          return <FoodCard {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Cart;
