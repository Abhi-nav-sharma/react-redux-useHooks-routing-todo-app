import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { editTodo } from "../Redux/action";

export default function EditTodo() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const [todo] = todos.filter((item) => item.id === id);
  console.log(todo);
  const history = useHistory();
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const handleEdit = () => {
    const payload = {
      id: id,
      title: state
    };
    const action = editTodo(payload);
    dispatch(action);
    history.push("/");
  };
  if (todo) {
    return (
      <div>
        <h3>Current title- {todo.title}</h3>
        <input
          placeholder="Add new title"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={handleEdit}>Save</button>
        <br />
        <br />
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
  // else {
  //   return (
  //     <div>
  //       <h1>Title changed successfully</h1>
  //       <Link to="/">Go to Home</Link>
  //     </div>
  //   );
  // }
}
