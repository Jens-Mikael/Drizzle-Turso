"use client";
import { createTodoAction } from "@/server/actions";
import { useRef } from "react";

const CreateTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const content = data.get("content");
    if (!content || typeof content !== "string") return;

    await createTodoAction(content);
    formRef.current?.reset();
  }
  return (
    <form ref={formRef} action={action}>
      <h2>Create new todo</h2>
      <input type="text" name="content" className="text-black ring" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateTodo;
