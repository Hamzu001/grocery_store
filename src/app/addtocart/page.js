"use client";
import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";

const AddToCart = () => {
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    addItemToCart(item);
    // if (newQty > Number(cartItem.stock)) return;
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  return (
    <>
      <section className="py-3 sm:py-4 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl text-center font-semibold mb-2">
            {cart?.cartItems?.length || 0} Item(s) in Cart
          </h2>
        </div>
      </section>

      {cart?.cartItems?.length > 0 && (
        <section className="py-10 mb-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex justify-center md:flex-row gap-4">
              <main className="md:w-3/4">
                <article className="border border-gray-300 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  {cart?.cartItems?.map((cartItem) => (
                    <div>
                      <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                        <div className="w-full lg:w-2/5 xl:w-2/4">
                          <figure className="flex leading-5">
                            <div>
                              <div className="block w-16 h-16 rounded border border-gray-300 overflow-hidden">
                                <img
                                  src={cartItem.imgUrl}
                                  alt={cartItem.title}
                                />
                              </div>
                            </div>
                            <figcaption className="ml-3">
                              <p>
                                <a href="#" className="hover:text-blue-600">
                                  {cartItem.title}
                                </a>
                              </p>
                              <p className="mt-1 text-gray-400">
                                {" "}
                                {cartItem.categorey}
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="w-24">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                              onClick={() => decreaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">
                                −
                              </span>
                            </button>
                            <input
                              type="number"
                              className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  custom-input-number"
                              name="custom-input-number"
                              value={cartItem.quantity}
                              readOnly
                            ></input>
                            <button
                              data-action="increment"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                              onClick={() => increaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="leading-5">
                            <p className="font-semibold not-italic">
                              ${cartItem.price * cartItem.quantity.toFixed(2)}
                            </p>
                            <small className="text-gray-400">
                              {" "}
                              {cartItem.price} / per item{" "}
                            </small>
                          </div>
                        </div>
                        <div className="flex-auto">
                          <div className="float-right">
                            <a
                              className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                              onClick={() => deleteItemFromCart(cartItem?.id)}
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />
                    </div>
                  ))}
                </article>
              </main>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AddToCart;
