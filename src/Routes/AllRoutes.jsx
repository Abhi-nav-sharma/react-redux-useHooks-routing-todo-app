import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import EditTodo from "../Pages/EditTodo";
import Home from "../Pages/Home";
import TodoCard from "../Pages/TodoCard";

export default function AllRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/todo/:id">
        <TodoCard />
      </Route>
      <Route exact path="/todo/:id/edit">
        <EditTodo />
      </Route>
      <Route>
        <div>
          OOPS! Wrong page <Link to="/">Go to Home</Link>
        </div>
      </Route>
    </Switch>
  );
}
