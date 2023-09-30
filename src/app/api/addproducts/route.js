import { NextResponse } from "next/server";
require("@/app/dbconn/mongodb");
const productModel = require("@/app/model/Products");

export async function POST(req) {
  const payload = await req.json();
  // console.log(payload)
  const data = new productModel(payload);
  const r = await data.save();
  return NextResponse.json(r);
}
