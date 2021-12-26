import { useDispatch } from "react-redux";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/action";
import TodoList from "./TodoList";
export default function Todo() {
  const dispatch = useDispatch();
  const handleAdd = (task) => {
    const payload = {
      title: task,
      status: false,
      id: uuid()
    };
    const action = addTodo(payload);
    dispatch(action);
  };
  return (
    <>
      <h1>Todo</h1>
      <TodoInput handleAdd={handleAdd} />
      <TodoList />
    </>
  );
}
