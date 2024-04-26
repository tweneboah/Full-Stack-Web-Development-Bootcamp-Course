import { NextResponse } from "next/server";
import Todo from "@/src/models/Todo";
import connectDB from "@/src/utils/dbConnect";

//! single
export async function GET(request, { params }) {
  //Connect to db
  connectDB();
  //get the id
  const { id } = params;
  const todo = await Todo.findById(id);

  return new NextResponse(JSON.stringify(todo));
}
//! delete
export async function DELETE(request, { params }) {
  //Connect to db
  connectDB();
  //get the id
  const { id } = params;
  await Todo.findByIdAndDelete(id);

  return new NextResponse(
    JSON.stringify({
      message: "Todo Deleted",
    })
  );
}
//! update
export async function PUT(request, { params }) {
  //Connect to db
  connectDB();
  //get the id
  const { id } = params;
  //get user data
  const data = await request.json();
  const todo = await Todo.findByIdAndUpdate(id, data, { new: true });

  return new NextResponse(JSON.stringify(todo));
}
