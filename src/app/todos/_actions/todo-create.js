"use server";
import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";
export async function createTodoAction(_, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  if (!title || !content) {
    return { message: "All fields are required!" };
  }
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify([{ name: title, age: content }]),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath("/");
}
