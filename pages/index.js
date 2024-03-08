import TodoItem from "@/component/todolist/todoitem";
import { Inter } from "next/font/google";
import TodoForm from "@/component/todoform/todoform";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, settodos] = useState([]);

  const AddTodo = (todo) => {
    settodos((prev) => [...prev, todo]);
  };

  return (
    <div class="h-screen pt-20">
      <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
        <div class="px-4 py-2">
          <h1 class="text-gray-800 font-bold text-2xl ">Todo</h1>
        </div>
        <TodoForm AddTodo={AddTodo} />

        <ul class="divide-y px-4">
          {todos.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
