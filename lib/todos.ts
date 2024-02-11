import { db } from "@/db";
import { auth } from "./auth";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getTodos = async () => {
  try {
    const session = await auth();
    if (!session) throw new Error("No session");
    const res = await db.query.todos.findMany({
      where: eq(todos.user_id, session?.user?.id as string),
    });
    //db.query(todos).where(eq(todos.id, id)).findOne()
    return { todos: res };
  } catch (error) {
    return { error };
  }
};

export const createTodo = async (content: string) => {
  try {
    const session = await auth();
    const res = await db.insert(todos).values({
      content,
      user_id: session?.user?.id as string,
    });
  } catch (error) {
    return { error };
  }
};

export const updateTodo = async (id: string, isCompleted: boolean) => {
  try {
    await db.update(todos).set({ isCompleted }).where(eq(todos.id, id));
  } catch (error) {
    return { error };
  }
};
