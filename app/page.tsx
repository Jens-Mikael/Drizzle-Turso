import { auth } from "@/lib/auth";
import { getTodos } from "@/lib/todos";
import CreateTodo from "./components/CreateTodo";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Todo from "./components/Todo";

export default async function Home() {
  const { todos } = await getTodos();
  const session = await auth();
  return (
    <div>
      {session?.user ? (
        <>
          <Logout />
          <CreateTodo />
          {todos?.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}
