import { NextResponse } from "next/server";
require("@/app/dbconn/mongodb");
const productModel = require("@/app/model/Products");

export async function GET(req) {
  let n = await productModel.find();
  return NextResponse.json(n);
}
