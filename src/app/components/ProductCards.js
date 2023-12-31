"use client";
import React, { useState, useEffect } from "react";
import ProductModel from "./ProductModel";
import Loading from "./Loading";

const ProductCards = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getproducts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        // console.log({"products":data})
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <section className="text-gray-600 mt-4 body-font">
            <div className="flex ml-10">
              <p className=" text-[30px]">{props.title}</p>
            </div>

            {loading ? (
              <div className="flex justify-center">
                <Loading />
              </div>
            ) : null}

            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                {data.map((i, k) => {
                  // console.log(i)
                  if (props.title === i.categorey) {
                    return (
                      <div
                        key={i._id}
                        className="lg:w-1/4  md:w-1/2 p-4 w-full"
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
                          <h1 className="text-gray-900 cursor-pointer text-center text-lg font-medium">
                            <ProductModel
                              id={i._id}
                              data={data}
                              title={i.title}
                              category={i.categorey}
                            />
                          </h1>
                          <h3 className="mt-1 text-center">
                            Price: ${i.price}
                          </h3>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
