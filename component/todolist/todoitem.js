function TodoItem(props) {
  return (
    <li class="py-4">
      <div class="flex items-center">
        <input
          id="todo1"
          name="todo1"
          type="checkbox"
          class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label for="todo1" class="ml-3 block text-gray-100">
          <span class="text-lg font-medium mr-3 text-black">
            {props.todo.todo}
          </span>
        </label>
      </div>
    </li>
  );
}
export default TodoItem;
