import { NextApiHandler } from "next";
import { Connectmongodb } from "@/lib/ConnectDB";

import { NextRequest, NextResponse } from "next/server";
import { Blog } from "@/Model/CreatePost";
type ResponseData = {
  message: string;
};

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  await Connectmongodb();
  await Blog.create(data);
  // Respond with a JSON object
  return NextResponse.json({ message: "Data received", data });
}

export async function GET(req: NextRequest, res: NextResponse) {
  await Connectmongodb();
  const data = await Blog.find();
  return NextResponse.json({ data });
}

export async function DELETE(req: NextRequest, res: NextResponse) {
const id = req.nextUrl.searchParams.get("id");
 
    await Connectmongodb();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({message: "Data deleted" });
   
}
export async function PUT(req: NextRequest, res: NextResponse) {
const id = req.nextUrl.searchParams.get("id");
 
    await Connectmongodb();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({message: "Data deleted" });
   
}
