import TodoItem from "@/component/todolist/todoitem";
import { Inter } from "next/font/google";
import TodoForm from "@/component/todoform/todoform";
import { useState } from "react";
import { MongoClient } from "mongodb";

const inter = Inter({ subsets: ["latin"] });

function Home(props) {
  const [todos, settodos] = useState(props.todos);

  const AddTodo = async (todo) => {
    const response = await fetch("api/Fetch/", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();

    settodos((prev) => [...prev, { ...todo, id: data.data.insertedId }]);
    console.log(todos);
  };

  const Delete = async (todo) => {
    const temp = todos.filter((to) => to.id !== todo.id);
    settodos(temp);
    const response = await fetch("api/Delete/", {
      method: "DELETE",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const Updatetodo = async (todo) => {
    let temp = todos.find((to) => to.id === todo.id);
    temp.todo = todo.todo;
    const response = await fetch("api/UpdateTodo/", {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const Completed = async (todo) => {
    const response = await fetch("api/DoneTodo/", {
      method: "POST",
      body: JSON.stringify({
        todo: todo.todo,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    Delete(todo);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div class="h-screen pt-20">
      <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
        <div class="px-4 py-2">
          <h1 class="text-orange-600 font-bold text-2xl ">Todo</h1>
        </div>
        <TodoForm AddTodo={AddTodo} />

        <ul class="divide-y px-4">
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              Delete={Delete}
              Updatetodo={Updatetodo}
              Completed={Completed}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const Client = await MongoClient.connect(
    "mongodb+srv://vaibhavdhamanage12:FnNmAenYGVoZKLCK@cluster0.t5bx9cq.mongodb.net/Todo?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = Client.db();
  const todocollection = db.collection("Todo");
  const data = await todocollection.find().toArray();
  Client.close();

  return {
    props: {
      todos: data.map((todo) => ({
        todo: todo.todo,
        id: todo._id.toString(),
      })),
    },
  };
}

export default Home;
