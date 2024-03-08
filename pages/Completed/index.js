import DoneTodo from "@/component/DoneTodo/DoneTodo";
import { MongoClient } from "mongodb";

function Completed(props) {
  return (
    <div class="h-screen pt-20">
      <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
        <ul class="divide-y px-4">
          {props.todos.map((todo) => (
            <DoneTodo todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const Client = await MongoClient.connect(
    "mongodb+srv://vaibhavdhamanage12:FnNmAenYGVoZKLCK@cluster0.t5bx9cq.mongodb.net/done?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = Client.db();
  const todocollection = db.collection("done");
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
export default Completed;
