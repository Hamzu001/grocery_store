import { NextResponse } from "next/server";
require("@/app/dbconn/mongodb");
const productModel = require("@/app/model/Products");

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  // console.log(searchParams.get('query'))
  const query = searchParams.get("query");
  
  let products = await productModel.find();
  const filterProducts = products.filter((product) => {
    // console.log(product.title.toLowerCase().includes(query.toLowerCase()))
    return product.title.toLowerCase().includes(query.toLowerCase());
  });

  return NextResponse.json(filterProducts); 
}
