import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const TodoInput = ({ title, status, id, handleClick }) => {
  return (
    <>
      <div onClick={() => handleClick(id)}>{`${title}-${
        status ? "Done" : "Not Done"
      }`}</div>
      <Link to={`/todo/${id}/edit`}>Edit</Link>
    </>
  );
};

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/todo/${id}`);
  };
  console.log("state", todos);
  return (
    <>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              width: "600px",
              margin: "20px auto",
              padding: "20px",
              cursor: "pointer"
            }}
          >
            <TodoInput
              key={item.id}
              id={item.id}
              title={item.title}
              status={item.status}
              handleClick={handleClick}
            />
          </div>
        );
      })}
    </>
  );
}
