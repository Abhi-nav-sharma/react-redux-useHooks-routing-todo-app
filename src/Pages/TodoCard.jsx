import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { removeTodo, toggleTodo } from "../Redux/action";

export default function TodoCard() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const [todo] = todos.filter((item) => item.id === id);
  const dispatch = useDispatch();
  const handleToggle = () => {
    const action = toggleTodo(id);
    dispatch(action);
  };
  const handleDelete = () => {
    const action = removeTodo(id);
    dispatch(action);
  };
  console.log(todo);
  if (todo) {
    return (
      <>
        <div
          style={{ border: "2px solid black", width: "600px", margin: "auto" }}
        >
          <h1>{todo.title}</h1>
          <h2>{todo.status ? "Done" : "Not Done"}</h2>
          <button onClick={handleToggle}>
            {todo.status ? "Mark InComplete" : "Mark Complete"}
          </button>
          <button
            onClick={handleDelete}
            style={{ background: "red", color: "white" }}
          >
            Delete task
          </button>
        </div>
        <Link to="/">Go Back</Link>
      </>
    );
  } else {
    return (
      <div>
        <h1>Task Deleted</h1>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}
