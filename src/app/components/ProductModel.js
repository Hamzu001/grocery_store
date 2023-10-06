'use client'
import React, { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";

const ProductModel = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { addItemToCart } = useContext(CartContext);
  // console.log(props)
  return (
    <>
      <button type="button" className=" hover:underline" onClick={() => setShowModal(true)}>{props.title}</button>
      {showModal ? (
        <>
          <div className="flex justify-center backdrop-filter backdrop-blur items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border border-solid border-blue-300  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">      
                <div className="flex p-2 justify-between border-b border-solid border-blue-200 rounded-t ">
                  <span className="text-3xl  font=semibold">{props.category}</span>
                <button
                    className="bg-transparent  border-0 text-black"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-8 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <section className="text-gray-600 body-font overflow-hidden">
                  <div className="container px-2 py-2 mx-auto">
                    {props.data.map((i) => {
                      if (i._id === props.id) {
                        return (<>
                          <div key={i._id}
                            className="lg:w-4/5 mx-auto flex flex-wrap"
                          >
                            <img
                              alt="ecommerce"
                              className="lg:w-1/2 mt-3 w-full h-96 object-cover object-center rounded"
                              src={i.imgUrl}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {i.categorey}
                              </h2> */}
                              <span className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {i.title}
                              </span>
                              <div className="flex mb-4">
                                <span className="flex items-center">
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 text-indigo-500"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                  </svg>
                                  <span className="text-gray-600 ml-3">
                                    4 Reviews
                                  </span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                  </a>
                                  <a className="text-gray-500">
                                    <svg
                                      fill="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                  </a>
                                </span>
                              </div>
                              <div>

                              <span className="leading-relaxed">{i.description}</span>
                              </div>

                              <div className=" justify-center">
                                <span className="title-font mt-1 font-medium text-2xl text-gray-900">
                                  Price : ${i.price}
                                </span>
                                <button
                                  onClick={() =>{
                                    addItemToCart({
                                      id: i._id,
                                      imgUrl: i.imgUrl,
                                      categorey: i.categorey,
                                      title: i.title,
                                      price: i.price,
                                      description: i.description,
                                    })
                                    setShowModal(false);
                                  }
                                  }
                                  className="ml-2 mt-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                >
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </>);
                      }
                    })}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ProductModel;
