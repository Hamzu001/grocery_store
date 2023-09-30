"use client";
import Link from "next/link";
import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    fetch("/api/getproducts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log({"products":data})
      });
  };
  return (
    <>
      <div className="flex pl-16 justify-center">
        <form className=" w-[600px]">
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
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              id="search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              onClick={searchHandler}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="container px-5 py-1 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((i, k) => {
              if (search === i.title) {
                return (
                  <div
                    key={k}
                    className="lg:w-1/4 py-3 mt-9 cursor-pointer md:w-1/2 p-4 w-full"
                  >
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={i.imgUrl}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-center text-xs tracking-widest title-font mb-1">
                        {i.categorey}
                      </h3>
                      <Link href={"/" + i._id}>
                        <h2 className="text-gray-900 cursor-pointer hover:underline title-font text-center text-lg font-medium">
                          {i.title}
                        </h2>
                      </Link>
                      <p className="mt-1 text-center">${i.price}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
