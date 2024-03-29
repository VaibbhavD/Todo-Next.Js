import { useRef, useState } from "react";

function TodoItem(props) {
  const [edit, setedit] = useState(false);
  const todoRef = useRef();

  const DeleteHandler = () => {
    props.Delete(props.todo);
  };

  const UpdatHandler = () => {
    const updatetodo = todoRef.current.value;

    const todo = {
      todo: updatetodo,
      id: props.todo.id,
    };
    props.Updatetodo(todo);

    setedit((prev) => !prev);
  };

  const EditHandler = () => {
    setedit((prev) => !prev);
  };
  const Cancel = () => {
    setedit((prev) => !prev);
  };

  return (
    <li class="py-4 flex ">
      <div class="flex items-center w-1/2">
        <input
          id="todo1"
          name="todo1"
          type="checkbox"
          class="h-4 w-4 mr-1 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
          onClick={() => props.Completed(props.todo)}
        />
        <label for="todo1" class="ml-3 block text-gray-100">
          {!edit && (
            <span class="text-xl font-medium mr-3 text-black">
              {props.todo.todo}
            </span>
          )}
          {edit && (
            <span class="text-xl font-medium mr-3 text-black">
              <input
                id="todo1"
                name="todo1"
                type="text"
                placeholder={props.todo.todo}
                class="text-black "
                ref={todoRef}
                required
                // class="h-4 w-4 mr-1 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
              />
            </span>
          )}
        </label>
      </div>
      <div class="flex items-center w-1/2 justify-end gap-3 hover:{} ">
        {edit && (
          <>
            <button class="bg-green-500 p-1 rounded" onClick={UpdatHandler}>
              Update
            </button>
            <button class="bg-red-500 p-1 rounded" onClick={Cancel}>
              Cancel
            </button>
          </>
        )}
        {!edit && (
          <>
            <label onClick={EditHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-700 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </label>
            <label onClick={DeleteHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-red-700 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </label>
            <label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </>
        )}
      </div>
    </li>
  );
}
export default TodoItem;
