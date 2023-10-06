"use client"
import React, { useState } from "react";
import SearchDetails from "./SearchDetails";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

    const searchHandler = async (e) => {
      e.preventDefault()
      try {
        const res = await fetch(`/api/searchproducts?query=${query}`)
        const result = await res.json()
        // console.log(result)
        setData(result)

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
      <div className="flex p-4 justify-center">
        <form onSubmit={searchHandler} className=" w-[600px]">
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
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              type="search"
              id="search"
              className="block w-full p-3 pl-10 text-sm  border border-gray-300 text-black rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {data.length>0 && <SearchDetails data={data}/>}
      
    </>
  );
};

export default Search;
