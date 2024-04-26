import { NextResponse } from "next/server";
import Todo from "@/src/models/Todo";
import connectDB from "@/src/utils/dbConnect";

//! Create todo
export async function POST(request) {
  //connect to db
  connectDB();
  //create the todo
  const todoData = await request.json();
  const todo = await Todo.create(todoData);
  return new NextResponse(JSON.stringify(todo));
}

//! Fetching
export async function GET(request) {
  //connect to db
  connectDB();
  const todos = await Todo.find();
  return new NextResponse(JSON.stringify(todos));
}
