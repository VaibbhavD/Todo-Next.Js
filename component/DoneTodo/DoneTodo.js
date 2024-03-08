const DoneTodo = (props) => {
  return (
    <li class="py-4 flex items-center m-auto ">
      <div class="flex items-center w-1/2">
        <label for="todo1" class="ml-3 block text-gray-100">
          <span class="text-xl font-medium mr-3 text-black">
            {props.todo.todo}
          </span>
        </label>
      </div>
    </li>
  );
};

export default DoneTodo;
