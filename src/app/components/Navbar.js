"use client";
import CartContext from "../../../context/CartContext";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const Navbar = () => {
  // const [search, setSearch] = useState('')

  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  const router = useRouter();
  return (
    <div>
      <header className="text-gray-600  body-font">
        <div className="container mx-auto flex flex-wrap p-4  md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
            <img
              alt="ecommerce"
              className="h-12 ml-3"
              src="./header_logo.png"
            />
            <span className="ml-3 text-blue-500 cursor-pointer text-[26px]">
              Grocery Store
            </span>
          </a>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
            {/* <form className=" w-[600px]">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                onChange={(e)=> setSearch(e.target.value)}
                  type="search"
                  id="search"
                  className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                onClick={(e)=> {
                  e.preventDefault(); 
                  console.log(search)}}
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form> */}
          </nav>
          <div className="mr-2">
            <button
              onClick={() => router.push("/addtocart")}
              type="button"
              className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <img alt="ecommerce" className="h-8" src="./cart.png" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {cartItems?.length || 0}
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
