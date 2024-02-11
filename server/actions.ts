"use server";
import { createTodo, updateTodo } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export async function createTodoAction(content: string) {
  await createTodo(content);
  revalidatePath("/");
}

export async function updateTodoAction(id: string, isCompleted: boolean) {
  await updateTodo(id, isCompleted);
  revalidatePath("/");
}
