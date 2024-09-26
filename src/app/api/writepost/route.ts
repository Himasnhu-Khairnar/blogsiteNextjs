import { NextApiHandler } from "next";
import { Connectmongodb } from "@/lib/ConnectDB";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Blog } from "@/Model/CreatePost";
type ResponseData = {
  message: string;
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = await req.json();
  await Connectmongodb();
  await Blog.create(data);
  // Respond with a JSON object
  return NextResponse.json({ message: "Data received", data });
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await Connectmongodb();
  const data = await Blog.find();
  return NextResponse.json({ data });
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
const id = req.nextUrl.searchParams.get("id");
 
    await Connectmongodb();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({message: "Data deleted" });
   
}
export async function UPDATE(req: NextApiRequest, res: NextApiResponse) {
const id = req.nextUrl.searchParams.get("id");
 
    await Connectmongodb();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({message: "Data deleted" });
   
}