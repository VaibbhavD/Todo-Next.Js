import { useRef } from "react";

function TodoForm(props) {
  const todoRef = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const todo = {
      todo: todoRef.current.value,
      status: "false",
    };
    props.AddTodo(todo);
    todoRef.current.value = "";
  };

  return (
    <form onSubmit={SubmitHandler} class="w-full max-w-md mx-auto px-4 py-2">
      <div class="flex items-center border-b-2 border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          ref={todoRef}
          placeholder="Add a task"
          required
        />
        <button
          class="flex-shrink-0 bg-orange-600 hover:orange-600 border-orange-600 hover:border-orange-500 text-sm border-2 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
export default TodoForm;
