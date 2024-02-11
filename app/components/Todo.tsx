"use client";
import { useTransition } from "react";
import { todos } from "@/db/schema";
import { updateTodoAction } from "@/server/actions";

interface ITodo {
  todo: typeof todos.$inferInsert;
}

const Todo = ({ todo }: ITodo) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.isCompleted!}
        className="peer"
        onChange={(e) =>
          startTransition(() =>
            updateTodoAction(todo.id as string, e.target.checked)
          )
        }
      />
      <div className=" peer-checked:overline">{todo.content}</div>
    </div>
  );
};

export default Todo;
