"use client"
// import Link from 'next/link';
import React from 'react'
import ProductModel from "./ProductModel";

const SearchDetails = ({data}) => {
    // console.log({"data":data})
  return (
    <div>
      <div>
        <div className="container px-5 py-1 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data && data.length>0 && data.map((i) => {
                return (
                  <div
                    key={i._id}
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
                      {/* <Link href={"/" + i._id}>
                        <h2 className="text-gray-900 cursor-pointer hover:underline title-font text-center text-lg font-medium">
                          {i.title}
                        </h2>
                      </Link> */}
                      <h3 className="text-gray-900 cursor-pointer hover:underline title-font text-center text-lg font-medium">
                      <ProductModel
                              id={i._id}
                              data={data}
                              title={i.title}
                              category={i.categorey}
                            />
                        </h3>

                      <h3 className="mt-1 text-center">${i.price}</h3>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDetails
